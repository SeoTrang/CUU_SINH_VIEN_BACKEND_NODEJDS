const postReactionRepository = require("../models/postReaction/postReactionRepository");

const postReactionService = {
    create: async (data) => {
        return await postReactionRepository.create(data);
    },
    getByPostId: async (postId) => {
        return await postReactionRepository.getByPostId(postId);
    },
    delete: async (post_id,user_id) => {
        return await postReactionRepository.delete(post_id,user_id);
    },
    getReactionByPost: async (post_id) => {
        return await postReactionRepository.getByPostId(post_id);
    }
}

module.exports = postReactionService;