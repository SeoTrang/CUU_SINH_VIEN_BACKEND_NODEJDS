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
    getAllConversationsGroup: async()=> {
        return await conversationRepository.getAllConversationsGroup();
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
    searchAllConversationGroups2: async (name,address_name,school_name,faculty_name) => {
        return await conversationRepository.searchAllConversationGroups2(name,address_name,school_name,faculty_name);
    },

    acceptStatus: async (conversation_id) => {
        try{
            return await conversationRepository.acceptStatus(conversation_id);
        }catch(error){
            throw error;
        }
    },

    deletePrivateChat: async (conversation_id) => {
        try{
            return await conversationRepository.deletePrivateChat(conversation_id);
        }catch(error){
            throw error;
        }
    }
}

module.exports = conversationService;