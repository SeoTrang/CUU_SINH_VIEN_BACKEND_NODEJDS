const userService = require('../services/userService');
const { generateAccesstoken, generateRefreshtoken } = require("../auth/auth");
const refreshTokenService = require("../services/refreshTokenService");
const bcrypt = require('../util/bcrypt');
const addressService = require('../services/addressService');
const nodeMailService = require('../services/nodeMailService');
const OTPService = require('../services/OTPService');
const autController = {
    register: async (req,res) => {
        try {
            // addressService.getAll();
            // console.log(req.body);
            let user = req.body.data;
            if(!user) return res.status(400).json('missing data')
            if(user.email){
                let user_temp = await userService.findByEmail(user.email);
                // console.log(user_temp);
                if(user_temp) return res.status(409).json("Email đã tồn tại")
            }

            // console.log("test 123");
            const listAvatar = [
                '/img/avatar_default/avatar_default.jpg',
                '/img/avatar_default/avatar_1.jpg',
                '/img/avatar_default/avatar_2.jpg',
                '/img/avatar_default/avatar_3.jpg',
                '/img/avatar_default/avatar_4.jpg',
                '/img/avatar_default/avatar_5.jpg',
                '/img/avatar_default/avatar_6.jpg',
                '/img/avatar_default/avatar_7.jpg',
                '/img/avatar_default/avatar_8.jpg',
                '/img/avatar_default/avatar_9.jpg',
                '/img/avatar_default/avatar_10.jpg',
                '/img/avatar_default/avatar_11.jpg',
                '/img/avatar_default/avatar_12.jpg',
                '/img/avatar_default/avatar_13.jpg',
                '/img/avatar_default/avatar_14.jpg',
                '/img/avatar_default/avatar_15.jpg',
                '/img/avatar_default/avatar_16.jpg',
                '/img/avatar_default/avatar_17.jpg',
                '/img/avatar_default/avatar_18.jpg',
                '/img/avatar_default/avatar_19.jpg',
                '/img/avatar_default/avatar_20.jpg',
                '/img/avatar_default/avatar_21.jpg',
                '/img/avatar_default/avatar_22.jpg',
                '/img/avatar_default/avatar_23.jpg',
                '/img/avatar_default/avatar_24.jpg',
            ]
            // Generate a random index within the range of the array length
            const randomIndex = Math.floor(Math.random() * listAvatar.length);

            // Get the random avatar URL using the random index
            const randomAvatar = listAvatar[randomIndex];

            const encodePass = await bcrypt.hash(user?.pass);

            user.pass = encodePass;
            user.avatar = randomAvatar;

            const result = await userService.create(user);
            if(result) return res.status(200).json('success');
            return res.status(400).json('error when insert to database');
        } catch (error) {
            console.log(error);
            return res.status(500).json('server error');
        }
    },
    login: async (req, res) => {
        try {
            const data = req.body.data;
            const user = await userService.findByEmail(data.email);
            console.log(user);
            if(!user) {
                return res.status(404).json("not found");
            }
            if(!user.verifyEmail) return res.status(200).json('email is not verify');
            if(!await bcrypt.compare(data.pass,user.pass)) return res.status(404).json('email or pass invalid');
            let accessToken;
            let refreshToken;
            if (user) {
                accessToken = await generateAccesstoken(user);
                refreshToken = await generateRefreshtoken(user);
            }
            if(refreshToken && accessToken){
                const data = {
                    refreshToken: refreshToken,
                    user_id: user.id
                }
                const resultAddRefreshToken = refreshTokenService.create(data);
                if(resultAddRefreshToken) return res.status(200).json({
                    refreshToken:refreshToken,
                    accessToken:accessToken
                })
            }
            return res.status(500).json('server error');
        } catch (error) {
            console.log(error);
            return res.status(500).json('server error');
        }
    },
    logout: async (req,res) => {
        try {
            const refreshToken = req.headers.authorization.split(' ')[1];
            // console.log(refreshToken);
            if(!refreshToken) return res.status(403).json('unauthorized')
            const result = await refreshTokenService.delete(refreshToken);
            if(result) return res.status(200).json('success');
            return res.status(400).json('error when deleting refresh token');
        } catch (error) {
            console.log(error);
            return res.status(500).json('server error');
        }
    },

    sendEmail: async(req,res) => {
        try {
            const otp = Math.floor(1000 + Math.random() * 9000);
            const email = req.body.data.email;
            const result_send_email = await nodeMailService.sendMail(email,otp);
            if(result_send_email){
                await OTPService.create({
                    email: email,
                    otp: otp
                })
            }
            return res.status(200).json('success');
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error.message});
        }
    },

    verifyEmail: async(req,res) => {
        try {
            const email = req.body.data.email;
            const otp = req.body.data.otp;
            const result = await OTPService.getByEmailAndNotExpired({email: email, otp: otp});
            console.log(result);
            if(result) {
                OTPService.deleteOpt({email: email, otp: otp})
                const user = await userService.findByEmail(email);  
                if(!user) return res.status(404).json({error:'user not found'});
                await userService.verifyEmail(user.id);
                return res.status(200).json(result.success);
            }
                
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error});
        }
    },

    forgotPassword: async (req,res) => {
        try {
            const {user_id, pass} = req.body.data;
            const encodePass = await bcrypt.hash(pass);
            const data = {
                user_id: user_id,
                pass: encodePass
            }

            const result = await userService.saveNewPass(data);
            if(result.success) return res.status(200).json(result.success);
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error.message});
        }
    }
}

module.exports = autController;