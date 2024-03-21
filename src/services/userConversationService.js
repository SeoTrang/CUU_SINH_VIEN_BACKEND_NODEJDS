const userConversationRepository = require("../models/userConversation/userConversationRepository");

const userConversationService = {
    create: async(data) => {
        return await userConversationRepository.create(data);
    },
    getListUserInConversation: async(id) => {
        return await userConversationRepository.getListUserInConversation(id);
    }
}

module.exports = userConversationService;