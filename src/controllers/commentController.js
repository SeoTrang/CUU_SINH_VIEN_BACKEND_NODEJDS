const postCommentService = require("../services/postCommentService");

const commentController = {
    create: async (req,res) => {
        try {
            const {post_id, parent_id, comment} = req.body.data;
            const user_id = req.body.decode.id;
            if(!post_id || !comment) return res.status(400).json('missing data');
            const dataComment = {
                post_id: post_id,
                parent_id: parent_id,
                comment: comment,
                user_id: user_id
            }

            let result = await postCommentService.create(dataComment);
            if(result.success) return res.status(200).json('success');
            throw new Error(result.error);
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error.message});
        }
    },

    getByPost: async (req,res) => {
        try {
            const post_id = req.params.post_id;
            let comments = await postCommentService.getCommentsPost(post_id);
            console.log(comments);
            if(comments.success) return res.status(200).json(comments.success);
            throw new Error(comments.error);
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error.message});
        }
    }
}

module.exports = commentController;