const User = require("../user/user");
const PostComment = require("./postComment");

const postCommentRepository = {
    create: async (data) => {
        try {
            let result = await PostComment.create(data);
            if(result) return {success: result.id}
        } catch (error) {
            console.log(error);
            return {error: error.message}
        }
    },
    getLengthCommentPost: async (post_id) => {
        try {
            let result = await PostComment.findAll({
                where:{
                    post_id: post_id
                }
            });
            if(result) return {success: result.length}
        } catch (error) {
            console.log(error);
            return {error: error.message}
        }
    },

    getCommentsPost: async (post_id) => {
        try {
            let result = await PostComment.findAll({
                where:{
                    post_id: post_id
                },
                include: [
                    {
                        model: User
                    }
                ]
            });

            if(result) return {success: result}

        } catch (error) {
            return {error: error.message}
        }
    },
}

module.exports = postCommentRepository;