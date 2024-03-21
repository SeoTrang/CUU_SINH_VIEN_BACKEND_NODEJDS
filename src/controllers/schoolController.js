const schoolService = require("../services/schoolService");

const schoolController = {
    create: async (req,res)=> {
        try {
            console.log(req.body.data);
            let data = req.body.data;
            if(!data) return res.status(400).json('missing data');
            let result = await schoolService.create(data);
            if(result.success) return res.status(200).json('success');
            if(result.error) throw new Error(result.error);
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error});
        }
    },
    getByAddress: async(req,res) => {
        try {
            // console.log(req.query.address);
            let addressId = req.query.address;
            if(!addressId) return res.status(400).json('missing data')
            let result = await schoolService.getByAddress(addressId);
            // console.log(result.success.length);
            if(result.success.length >= 1) return res.status(200).json(result.success);
            if(result.error) throw new Error(result.error)
            return res.status(404).json('not found');
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error});
        }
    },
    getByAddressName: async(req,res) => {
        try {
            // console.log(req.query.address);
            let addressName = req.query.address;
            if(!addressName) return res.status(400).json('missing data')
            let result = await schoolService.getByAddressName(addressName);
            // console.log(result.success.length);
            if(result.success.length >= 1) return res.status(200).json(result.success);
            if(result.error) throw new Error(result.error)
            return res.status(404).json('not found');
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error});
        }
    }
}

module.exports = schoolController;