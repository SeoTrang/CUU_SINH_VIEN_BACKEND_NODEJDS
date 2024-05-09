const userConversationRepository = require("../models/userConversation/userConversationRepository");

const userConversationService = {
    create: async(data) => {
        return await userConversationRepository.create(data);
    },
    update: async(data) => {
        return await userConversationRepository.update(data);
    },
    getListUserInConversation: async(id) => {
        return await userConversationRepository.getListUserInConversation(id);
    }
}

module.exports = userConversationService;