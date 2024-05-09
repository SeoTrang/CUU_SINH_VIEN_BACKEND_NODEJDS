const postTagRepository = require("../models/postTag/postTagRepository")

const postTagService = {
    createMultiple: async (data) => {
        return await postTagRepository.createMultiple(data);
    },
    getUserIdByPostId: async (postId) => {
        return await postTagRepository.getUserIdByPostId(postId);
    },
}

module.exports = postTagService;