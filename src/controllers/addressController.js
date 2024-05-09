const addressService = require("../services/addressService");

const addressController = {
    getAll: async(req,res)=> {
        try {
            const result = await addressService.getAll();
            if(!result.success) return res.status(404).json('not found');
            return res.status(200).json(result.success);
        } catch (error) {
            console.log(error);
            return res.status(500).json('server error');
        }
    }
    
}

module.exports = addressController;