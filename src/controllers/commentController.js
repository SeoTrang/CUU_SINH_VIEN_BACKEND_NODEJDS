const postCommentContentService = require("../services/postCommentContentService");
const postCommentService = require("../services/postCommentService");

function sortCommentsByHierarchy(comments) {
    const sortedComments = [];
  
    // Tìm các bình luận cấp cao nhất (parent_id === null)
    const topLevelComments = comments.filter(comment => !comment.parent_id);
  
    // Hàm đệ quy để xây dựng cây bình luận
    function buildCommentTree(parentComment) {
      const children = comments.filter(comment => comment.parent_id === parentComment.id);
  
      // Sắp xếp các bình luận con theo thời gian tạo
      children.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  
      // Thêm bình luận con vào cây
      parentComment.children = children;
  
      // Đệ quy cho từng bình luận con
      children.forEach(child => buildCommentTree(child));
    }
  
    // Xây dựng cây bình luận cho mỗi bình luận cấp cao nhất
    topLevelComments.forEach(comment => {
      buildCommentTree(comment);
      sortedComments.push(comment);
    });
  
    return sortedComments;
  }

const commentController = {
    
    create: async (req,res) => {
        try {
            const {post_id, parent_id, comment,content } = req.body.data;
            const user_id = req.body.decode.id;
            if(!post_id || !comment) return res.status(400).json('missing data');
            const dataComment = {
                post_id: post_id,
                parent_id: parent_id,
                comment: comment,
                user_id: user_id
            }

            let commentInsert = await postCommentService.create(dataComment);
            // console.log('hello');
            // console.log(commentInsert.success);
            
            let comment_id = null;
            if(commentInsert.success) comment_id = commentInsert.success;
            if(content && content.length > 0){
                const dataCommentContent = content.map((value)=> {return {"content": value.url,"type":value.type,"comment_id": comment_id}}); 
                await postCommentContentService.createMultiple(dataCommentContent);
            }

            return res.status(200).json('success');
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error.message});
        }
    },

    delete: async (req,res) => {
        try {
            const comment_id  = req.params.comment_id;
            const user_id = req.body.decode.id;
           

            let commentInsert = await postCommentService.delete(comment_id);
            

            return res.status(200).json('success');
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error.message});
        }
    },

    getByPost: async (req,res) => {
        try {
            const post_id = req.params.post_id;
            let comments = await postCommentService.getCommentsPost(post_id);
            // console.log(comments);
            if(comments.success) return res.status(200).json(comments.success);
            throw new Error(comments.error);
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error.message});
        }
    }
}

module.exports = commentController;