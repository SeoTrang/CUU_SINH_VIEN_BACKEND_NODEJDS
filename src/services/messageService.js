const messageRepository = require("../models/message/messageRepository");

const messageService = {
    create: async (data)=> {
        return await messageRepository.create(data);
    },
    getLatestMessageByConversationId: async (id) => {
        return await messageRepository.getLatestMessageByConversationId(id);
    },
    getMessageFromConversation: async(conversation_id) => {
        return await messageRepository.getMessageFromConversation(conversation_id);
    },
    getMessageReverseFromConversation: async(conversation_id) => {
        return await messageRepository.getMessageReverseFromConversation(conversation_id);
    },

}

module.exports = messageService;