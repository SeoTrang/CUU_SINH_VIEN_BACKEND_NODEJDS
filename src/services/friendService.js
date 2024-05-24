const friendRepository = require('../models/friend/friendRepository');
const friendService = {
    create: async (data)=> {
        return friendRepository.create(data);
    },
    getAllFriends: async (id) => {
        return friendRepository.getAllFriends(id);
    },
    getSentRequests: async (id) => {
        return friendRepository.getSentRequests(id);
    },
    getReceivedRequests: async (id) => {
        return friendRepository.getReceivedRequests(id);
    },
    getAllFriendId: async (user_id) => {
        return friendRepository.getAllFriendId(user_id);
    },
    getAllFriendSentRequestId: async (user_id) => {
        return await friendRepository.getAllFriendSentRequestId(user_id);
    },
    checkExists: async (user_send_request_id,user_receive_id) => {
        return await friendRepository.checkExists(user_send_request_id,user_receive_id);
    },
    SentRequests: async (user_send_request_id,user_receive_id) => {
        return await friendRepository.SentRequests(user_send_request_id, user_receive_id);
    },
    updateStatusFriend: async (friendShip_id,status,user_id,friend_id) => {
        return await friendRepository.updateStatusFriend(friendShip_id,status,user_id,friend_id);
    },

    getFriendShip: async (user_id,friend_id) => {
        return await friendRepository.getFriendShip(user_id,friend_id);
    },
    deleteFriendShip: async(friendship_id) => {
        return await friendRepository.deleteFriendShip(friendship_id);
    }
}

module.exports = friendService;