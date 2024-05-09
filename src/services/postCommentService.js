const postCommentRepository = require("../models/postComment/postCommentRepository");

const postCommentService = {
    create: async (data) => {
        return postCommentRepository.create(data);
    },
    delete: async (comment_id) => {
        return postCommentRepository.delete(comment_id);
    },
    getLengthCommentPost: async (post_id) => {
        return postCommentRepository.getLengthCommentPost(post_id);
    },

    getCommentsPost: async (post_id) => {
        return await postCommentRepository.getCommentsPost(post_id);
    }
}

module.exports = postCommentService;