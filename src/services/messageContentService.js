const messageContentRepository = require("../models/messageContent/messageContentRepository");

const messageContentService = {
    create: async(data) => {
        return await messageContentRepository.create(data);
    },
    createMultiple: async(data) => {
        return await messageContentRepository.createMultiple(data);
    },
}

module.exports = messageContentService;