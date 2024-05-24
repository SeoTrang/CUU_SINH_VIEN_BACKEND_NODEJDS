const postContentRepository = require("../models/postContent/postContentRepository")

const postContentService = {
    createMultiple: async (data) => {
        return await postContentRepository.createMultiple(data);
    },

    getByPostId: async (postId) => {
        return await postContentRepository.getByPostId(postId);
    },
}

module.exports = postContentService;