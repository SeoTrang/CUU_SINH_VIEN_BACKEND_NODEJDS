const postRepository = require("../models/post/postRepository")

const postService = {
    create: async (data) => {
        return await postRepository.create(data);
    },
    getFeed: async (user_id) => {
        return await postRepository.getFeed(user_id);
    },
    getPost: async (post_id) => {
        return await postRepository.getPost(post_id);
    },

    delete: async(id) => {
        return await postRepository.delete(id);
    }
}

module.exports = postService;