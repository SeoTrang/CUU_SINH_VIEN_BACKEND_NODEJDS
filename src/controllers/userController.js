const friendService = require("../services/friendService");
const userService = require("../services/userService");

const userController = {
    search: async(req,res)=> {
        try {
            const search = req.params.search;
            const result = await userService.search(search);
            console.log(result);
            if(result.success) return res.status(200).json(result.success);
            if(result.error) throw new Error(result.error);
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error});
        }
    },
    getAllFriends: async(req,res) => {
        try {
            const user_id = req.body.decode.id;
            const result = await friendService.getAllFriends(user_id);
            console.log(result);
            if(result.success) return res.status(200).json(result.success);
            if(result.error) throw new Error(result.error);
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error});
        }
    },

    getSentRequests:async(req,res) => {
        try {
            const user_id = req.body.decode.id;
            const result = await friendService.getSentRequests(user_id);
            console.log(result);
            if(result.success) return res.status(200).json(result.success);
            if(result.error) throw new Error(result.error);
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error});
        }
    },
    getReceivedRequests:async(req,res) => {
        try {
            const user_id = req.body.decode.id;
            const result = await friendService.getReceivedRequests(user_id);
            console.log(result);
            if(result.success) return res.status(200).json(result.success);
            if(result.error) throw new Error(result.error);
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error});
        }
    },


    getProfile:async(req,res) => {
        try {
            console.log(req.body);
            const user_id = req.body.decode.id;
            const user = await userService.findById(user_id);
            if(user) return res.status(200).json(user);
            return res.status(404).json('not found');
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error});
        }
    },
    getUserByID: async (req,res) => {
        try {
            const user_id = req.params.user_id;
            if(!user_id) return res.status(400).json('missing data');
            const user = await userService.findById(user_id);
            if(user) return res.status(200).json(user);
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error});
        }
    },


    getAllUsers: async (req,res) => {
        try {
            let result = await userService.getAllUsers();
            if(result) return res.status(200).json(result.success);
            throw new Error(result.error);
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error.message});
        }
    }
}

module.exports = userController;