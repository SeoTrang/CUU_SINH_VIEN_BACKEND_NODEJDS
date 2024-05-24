const messageContentRepository = require("../models/MessageContent/messageContentRepository");

const messageContentService = {
    create: async(data) => {
        return await messageContentRepository.create(data);
    },
    createMultiple: async(data) => {
        return await messageContentRepository.createMultiple(data);
    },
}

module.exports = messageContentService;