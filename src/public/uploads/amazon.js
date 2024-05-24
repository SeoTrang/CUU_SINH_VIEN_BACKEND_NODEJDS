/**
 * private exports Amazon API
 *
 * https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/welcome.html
 * https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/welcome.html
 * https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3/
 * https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3/classes/s3.html
 * https://github.com/courajs/pdf-poc
 *
 * @param rules
 */
module.exports = class Authorize {
    /**
     * Instantiate a Authorize.
     *
     * @constructor
     *
     * @return  {Authorize} A constructed Authorize object.
     *
     */
    constructor(realm) {
        this.realm        = realm;
        this.client       = this.authorize(this.realm);
        this.SSEKey       = Buffer.from(process.env.ENCRYPTION_KEY.substring(0, 24)).toString('base64');
        this.SSEMd5       = require('crypto').createHash('md5').update(this.SSEKey).digest('base64');
        this.SSEAlgorithm = 'AES256';
    }

    authorize = (realm) => {
        const {S3}        = require('@aws-sdk/client-s3');
        const credentials = {
            accessKeyId    : process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        };

        return new S3({
            credentials     : credentials,
            endpoint        : process.env.AWS_ENDPOINT,
            region          : 'default',
            signatureVersion: 'v4',
            forcePathStyle  : true, // Configures to use subdomain/virtual calling format.
        });
    }

    allFiles = async () => {
        let params      = {Bucket: this.realm};
        let isTruncated = true;
        let marker;

        while (isTruncated) {
            if (marker) {
                params.Marker = marker;
            }

            const res = await this.client.listObjectsV2(params);

            for (const item of res.Contents) {
                console.log(item.Key);
                // do something with the object
                // Note that this will only get you the object metadata
                // if you need the object body then you will need to
                // call the getObject operation using the item.Key
            }

            isTruncated = res.IsTruncated;

            if (isTruncated) {
                marker = res.NextContinuationToken;
            }
        }
    }

    listFolders = async (folder = false) => {
        let params      = {
            Bucket   : this.realm,
            MaxKeys  : 2147483647,
            Delimiter: '/',
        };
        let isTruncated = true;
        let result      = [];
        let marker;

        if (folder) {
            params.Prefix = folder;
        }

        while (isTruncated) {
            if (marker) {
                params.Marker = marker;
            }

            const data = await this.client.listObjectsV2(params);

            for (const item of data.CommonPrefixes) {
                result.push(item.Prefix);
            }

            isTruncated = data.IsTruncated;

            if (isTruncated) {
                marker = data.NextContinuationToken;
            }
        }

        return result;
    }

    listFiles = (args = {}) => {
        return new Promise((resolve, reject) => {
            const params = {
                ...{
                    Bucket    : this.realm,
                    MaxKeys   : args.limit || 20,
                    FetchOwner: true,
                },
                ...args
            };

            if (params.delimiter) {
                params.Delimiter = params.delimiter;
            }

            if (params.folder) {
                params.Prefix = params.folder;
            }

            if (params.next) {
                params.Marker = params.next;
            }

            this.client.listObjectsV2(params, (error, data) => {
                if (error) {
                    return reject(error);
                }
                return resolve(data);
            });
        });
    }

    createBucket = async () => {
        const params = {Bucket: this.realm};
        const s3     = this.client;
        const cors   = [
            {
                'AllowedHeaders': [
                    '*',
                ],
                'AllowedMethods': [
                    'GET',
                    'HEAD',
                ],
                'AllowedOrigins': [
                    '*'
                ],
                'MaxAgeSeconds' : 28800
            },
        ];

        try {
            await s3.headBucket(params);
        } catch (e) {
            await s3.createBucket({
                Bucket                   : this.realm,
                ACL                      : 'private',
                CreateBucketConfiguration: {LocationConstraint: 'default'}
            });
            await s3.putBucketCors({
                Bucket           : this.realm,
                CORSConfiguration: {CORSRules: cors},
            });
        }

        return this.realm;
    }

    deleteFile = (file_id) => {
        return new Promise((resolve, reject) => {
            const params = {
                Bucket: this.realm,
                Key   : file_id,
            };
            this.client.deleteObject(params, (error, data) => {
                if (error) {
                    return reject(error);
                }
                return resolve(data);
            });
        });
    }

    downloadFile = async (key) => {
        const {GetObjectCommand} = require('@aws-sdk/client-s3');
        const {getSignedUrl}     = require('@aws-sdk/s3-request-presigner');
        const params             = new GetObjectCommand({
            Key   : key,
            Bucket: this.realm,
        });

        return await getSignedUrl(this.client, params, {
            expiresIn: process.env.AWS_CACHE_LIFETIME
        });
    }

    downloadStatic = (key, res) => {
        const params = {
            Key   : key,
            Bucket: this.realm,
        };

        const fileStream = this.client.getObject(params).createReadStream();

        fileStream.pipe(res);
    }

    uploadFile = async (file, body = false, url = false) => {
        try {
            const {Upload} = require('@aws-sdk/lib-storage');
            const fs       = require('fs');
            const date     = new Date();
            const month    = ('0' + (date.getMonth() + 1)).slice(-2);
            const year     = date.getFullYear();
            const upload   = new Upload({
                client: this.client,
                params: {
                    ACL               : 'private',
                    Bucket            : this.realm,
                    Body              : body ? body : fs.createReadStream(file.filepath),
                    Key               : url ? `${url}/${file.newFilename}` : `${year}/${month}/${file.newFilename}`,
                    ContentDisposition: `attachment; filename="${encodeURIComponent(file.originalFilename)}"`,
                    ContentType       : file.mimetype,
                },
            });

            await upload.done();

            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}