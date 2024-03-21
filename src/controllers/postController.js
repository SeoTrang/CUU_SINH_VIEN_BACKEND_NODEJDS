const postContentService = require("../services/postContentService");
const postReactionService = require("../services/postReactionService");
const postService = require("../services/postService");
const postTagService = require("../services/postTagService");

const postController = {
    create: async (req,res) => {
        try {
            const {caption, user_tag_id, content} = req.body.data;
            const user_id = req.body.decode.id;
            
            console.log(req.body.data);
            const dataPost = {
                user_id: user_id,
                caption: caption
            }
            const postInsert = await postService.create(dataPost);
            let post_id = null;
            if(postInsert.success) post_id = postInsert.success;
            if(user_tag_id){
                const dataPostTag = user_tag_id.map((value)=> {return {"user_tag_id": value, "post_id": post_id}})
                await postTagService.createMultiple(dataPostTag);
            }
            if(content){
                const dataPostContent = content.map((value)=> {return {"content": value.url,"type":value.type,"post_id": post_id}}); 
                await postContentService.createMultiple(dataPostContent);
            }

            return res.status(200).json('success');

        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error.message});
        }
    },

    getFeed: async (req,res) => {
        try {
            let user_id = req.body.decode.id;
            let result = await postService.getFeed(user_id);
            res.json(result);
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error.message});
        }
    },
    getPost: async (req,res) => {
        try {
            let post_id = req.params.post_id;

            let result = await postService.getPost(post_id);
            res.json(result);
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error.message});
        }
    },
    getReactionByPost: async(req, res)  => {
        try {
            const post_id = req.params.post_id;
            // console.log(post_id);
            if(!post_id) return res.status(404).json('missing data');
            const dataFetch = await postReactionService.getReactionByPost(post_id);
            if(dataFetch.success) return res.status(200).json(dataFetch.success);
            throw new Error(dataFetch.error);
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error.message});
        }
    },
    reactionDelete: async (req,res) => {
        try {
            const post_id = req.params.post_id;
            // console.log(req.params.post_id);
            const user_id = req.body.decode.id;
            if(!post_id) return res.status(400).json('missing data');

            
            
            let deleteReaction = await postReactionService.delete(post_id,user_id);
            if(deleteReaction.success) return res.status(200).json('success');
            throw new Error(deleteReaction.error)
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error.message});
        }
    },

    reactionPost: async (req,res) => {
        try {
            const {post_id} = req.body.data;
            const user_id = req.body.decode.id;
            if(!post_id) return res.status(400).json('missing data');
            const data = {
                post_id: post_id,
                user_id: user_id
            }
            let saveReaction = await postReactionService.create(data);
            if(saveReaction.success) return res.status(200).json('success');
            throw new Error(saveReaction.error)
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error.message});
        }
    },


    delete: async(req,res) => {
        try {
            const post_id = req.params.id;
            const result = await postService.delete(post_id);
            if(result.success) return res.status(200).json('success');
            throw new Error(result.error)
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error.message});
        }
    }


}

module.exports = postController;