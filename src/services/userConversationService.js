const userConversationRepository = require("../models/userConversation/userConversationRepository");

const userConversationService = {
    create: async(data) => {
        return await userConversationRepository.create(data);
    },
    createV2: async(data) => {
        try {
            return await userConversationRepository.createV2(data);
        } catch (error) {
            throw error;
        }
    },
    update: async(data) => {
        return await userConversationRepository.update(data);
    },
    getListUserInConversation: async(id) => {
        return await userConversationRepository.getListUserInConversation(id);
    },

    delete: async(user_id, conversation_id)=> {
        try{
            return await userConversationRepository.delete(user_id, conversation_id);
        }catch(error){
            throw error;
        }
    },
    checkUserExist: async(group_id, user_id)=>{
        try {
            return await userConversationRepository.checkUserExist(group_id, user_id);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = userConversationService;