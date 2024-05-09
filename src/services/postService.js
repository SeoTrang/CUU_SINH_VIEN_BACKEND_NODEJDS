const postRepository = require("../models/post/postRepository")

const postService = {
    create: async (data) => {
        return await postRepository.create(data);
    },
    getFeed: async (user_id) => {
        return await postRepository.getFeed(user_id);
    },
    getFeed2: async (user_id) => {
        return await postRepository.getFeed2(user_id);
    },
    getPost: async (post_id) => {
        return await postRepository.getPost(post_id);
    },

    delete: async(id) => {
        return await postRepository.delete(id);
    },

    update: async(post_id,data) => {
        return await postRepository.update(post_id,data);
    },
    getPostByUser: async (user_id) => {
        return await postRepository.getPostByUser(user_id);
    }
}

module.exports = postService;