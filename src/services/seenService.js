const seenRepository = require("../models/seen/seenRepository");

const seenService = {
    create: async(data) => {
        return await seenRepository.create(data);
    },
    getAllUserSeen: async( conversation_id) => {
        return await seenRepository.getAllUserSeen(conversation_id);
    }
}

module.exports = seenService;