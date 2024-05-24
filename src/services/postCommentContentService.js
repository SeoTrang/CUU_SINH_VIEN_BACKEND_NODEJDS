const postCommentContentRepository = require("../models/postCommentContent/postCommentContentRepository");

const postCommentContentService = {
    createMultiple: async (data) => {
        return await postCommentContentRepository.createMultiple(data);
    },

    getByCommentId: async (comment_id) => {
        return await postCommentContentRepository.getByCommentId(comment_id);
    },
}

module.exports = postCommentContentService;