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
    }
}

module.exports = friendService;