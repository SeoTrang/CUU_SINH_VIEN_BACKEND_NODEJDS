const conversationRepository = require("../models/conversation/conversationRepository");

const conversationService = {
    create: async(data) => {
        return await conversationRepository.create(data);
    },
    createGroup: async(data) => {
        return await conversationRepository.createGroup(data);
    },
    getPrivateConversationFromUser: async (user_id_1,user_id_2) => {
        return await conversationRepository.getPrivateConversationFromUser(user_id_1,user_id_2);
    },
    getUserFromConversationID: async(id) => {
        return await conversationRepository.getUserFromConversationID(id);
    },
    getUserPendingFromConversationID: async(id) => {
        return await conversationRepository.getUserPendingFromConversationID(id);
    },

    getAllConversationFromUser: async(user_id)=> {
        return await conversationRepository.getAllConversationFromUser(user_id);
    },

    getAllConversationGroupsByUser: async(user_id)=> {
        return await conversationRepository.getAllConversationGroupsByUser(user_id);
    },

    getByName: async (name,address_id,school_id)=> {
        return await conversationRepository.getByName(name,address_id,school_id);
    },
    searchAllConversation: async (name,user_id) => {
        return await conversationRepository.searchAllConversation(name,user_id);
    },
    searchAllConversationGroups: async (name,address_id,school_id) => {
        return await conversationRepository.searchAllConversationGroups(name,address_id,school_id);
    },
}

module.exports = conversationService;