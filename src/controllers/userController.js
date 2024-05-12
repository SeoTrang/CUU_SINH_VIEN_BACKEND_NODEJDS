
const friendService = require("../services/friendService");

const userService = require("../services/userService");

const userController = {
    
    search: async(req,res)=> {
        try {
            const search = req.params.search;
            const result = await userService.search(search);
            // console.log(result);
            if(result.success) return res.status(200).json(result.success);
            if(result.error) throw new Error(result.error);
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error});
        }
    },
    recommendFriend: async (req,res) =>  {
        try {
            const user_id = req.body.decode.id;
            const result = await userService.recommendFriend(user_id);
            return res.status(200).json(result);
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error});
        }
    },
    searchByMultipleParam: async (req,res) => {
        try {
            const {address, school, faculty, userName} = req.query;
            const result = await userService.searchByMultipleParam(req.query);
            if(result.success) return res.status(200).json(result.success);
            throw new Error(result.error)
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                error: error.message
            })
        }
    },
    update: async (req,res) => {
        try {
            
            const user_id = req.body.decode.id;
            const user = req.body.data;
            // console.log(user);
            const result = await userService.update(user,user_id);
            if(result) return res.status(200).json('updated successfully')
            throw new Error('could not update user');
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error});
        }
    },
    getAllFriends: async(req,res) => {
        try {
            const user_id = req.body.decode.id;
            const result = await friendService.getAllFriends(user_id);
            // console.log(result);
            if(result.success) return res.status(200).json(result.success);
            if(result.error) throw new Error(result.error);
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error});
        }
    },

    searchAlluser: async(req,res) => {
        try {
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error})
        }
    },

    getSentRequests:async(req,res) => {
        try {
            const user_id = req.body.decode.id;
            const result = await friendService.getSentRequests(user_id);
            // console.log(result);
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
            // console.log(result);
            if(result.success) return res.status(200).json(result.success);
            if(result.error) throw new Error(result.error);
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error});
        }
    },


    getProfile:async(req,res) => {
        try {
            // console.log(req.body);
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
    },


    getImgLibrary: async (req, res) => {
        try {
            const user_id = req.body.decode.id;
            const user_id_library = req.params.user_id;
            const items_per_page = req.query.items || 15;
            const skip_items = req.query.skip_items || 0;
            const is_me = (user_id == user_id_library);

            // console.log(user_id);
            // console.log(user_id_library);
            // console.log(is_me);

            let result ;
            if(is_me) {
                result = await userService.getMyImgLibrary(items_per_page,skip_items,user_id);
            }else{
                result = await userService.getImgLibrary(items_per_page,skip_items,user_id);
            }

            

        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error.message});
        }
    },

    SentRequests: async(req,res) => {
        try {
            const user_send_request_id = req.body.decode.id;
            const user_receive_id = req.params.user_id;
            const checkExists = await friendService.checkExists(user_send_request_id,user_receive_id);
            if(checkExists) return res.status(409).json('friend is exist');
            const result = await friendService.SentRequests(user_send_request_id,user_receive_id);
            if(result.success) return res.status(200).json(result)
            throw new Error(result.error);
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error.message});
        }
    },

    updateStatusFriend: async(req,res) => {
        try {
            const status = req.body.data.status;
            let friend_id = req.body.data.friend_id;
            const user_id = req.body.decode.id;
            let friendShip_id = null;

            
            if(!status) throw new Error('status is not empty');
            const friendShip = await friendService.getFriendShip(user_id, friend_id);
            // console.log(friendShip.success);
            if(friendShip.success.length <= 0) return res.status(404).json('could not find friendship');

            friendShip_id = friendShip.success[0].friendship_id;
            const result = await friendService.updateStatusFriend(friendShip_id,status,user_id,friend_id);
            if(result.success) return res.status(200).json(result)
            throw new Error(result.error);
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error.message});
        }
    },
    deleteFriendShip: async (req,res) => {
        try {
            const friend_id = req.params.friend_id;
            if(!friend_id) return res.status(400).json('missing data')
            const user_id = req.body.decode.id;
            const friendShip = await friendService.getFriendShip(user_id, friend_id);
            // console.log(friendShip.success);
            if(friendShip.success.length <= 0) return res.status(404).json('could not find friendship');
            const friendship_id= friendShip.success[0].friendship_id;
            
            const resultDelete = await friendService.deleteFriendShip(friendship_id);
            if(resultDelete.success) return res.status(200).json(resultDelete);

        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error.message});
        }
    }
}

module.exports = userController;