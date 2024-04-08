const PostCommentContent = require("./PostCommentContent");

const postCommentContentRepository = {
    createMultiple: async (data) => {
        try {
            let result = await PostCommentContent.bulkCreate(data);
            if(result) return {success: result}
        } catch (error) {
            console.log(error);
            return {error: error}
        }
    },

    getByCommentId: async (comment_id) => {
        try {
            let result = await PostCommentContent.findAll({
                where:{
                    comment_id: comment_id
                }
            });
            if(result) return {success: result}
        } catch (error) {
            console.log(error);
            return {error: error}
        }
    },

    
}

module.exports = postCommentContentRepository;