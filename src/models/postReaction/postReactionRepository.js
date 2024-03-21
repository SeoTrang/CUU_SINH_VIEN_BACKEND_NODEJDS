const User = require("../user/user");
const PostReaction = require("./postReaction");

const postReactionRepository = {
    create: async (data) => {
        try {
            let result = await PostReaction.create(data);
            if(result) return {success: true};
        } catch (error) {
            console.log(error);
            return {error: error.message}
        }
    },
    getByPostId: async (post_id) => {
        try {
            let result = await PostReaction.findAll({
                where:{
                    post_id: post_id
                }
            });
            if(result) return {success: result}
        } catch (error) {
            console.error(error);
            return {error: error.message}
        }
    },
    delete: async (post_id,user_id) => {
        try {
            let result = await PostReaction.destroy({
                where:{
                    post_id: post_id,
                    user_id: user_id
                }
            });
            if(result) return {success: result}
        } catch (error) {
            console.error(error);
            return {error: error.message}
        }
    },
    getByPostId: async (post_id) => {
        try {
            let result = await PostReaction.findAll({
                where:{
                    post_id: post_id
                },
                include: [
                    {
                        model: User
                    }
                ]
            })
            if(result) return {success: result}
        } catch (error) {
            console.error(error);
            return {error: error.message}
        }
    }
}

module.exports = postReactionRepository;