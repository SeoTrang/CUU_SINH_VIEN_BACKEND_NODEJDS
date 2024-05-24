
const { where } = require("sequelize");
const sequelize = require("../../db/configDB");
const friendService = require("../../services/friendService");
const postCommentService = require("../../services/postCommentService");
const postContentService = require("../../services/postContentService");
const postReactionService = require("../../services/postReactionService");
const postTagService = require("../../services/postTagService");
const userService = require("../../services/userService");
const PostComment = require("../postComment/postComment");
const PostReaction = require("../postReaction/postReaction");
const PostTag = require("../postTag/postTag");
const User = require("../user/user");
const Post = require("./post");
const PostContent = require("../postContent/postContent");
const NotificationEntityTypes = require("../notificationEntityTypes/notificationEntityTypes");
const NotificationEntityTypesRepository = require("../notificationEntityTypes/notificationEntityTypesRepository");
const NotificationObjectsRepository = require("../notificationObjects/notificationObjectsRepository");
const NotificationChangesRepository = require("../notificationChanges/notificationChangesRepository");
const NotificationsRepository = require("../notifications/notificationsRepository");
const postTagRepository = require("../postTag/postTagRepository");
const postContentRepository = require("../postContent/postContentRepository");

const postRepository = {
    create: async (data) => {
        try {
            let result = await Post.create(data);
   
            let array_friend = await friendService.getAllFriendId(data.user_id) ;
            // console.log(array_friend.success);

            //-------------  inseart notifications ------------------------------
            //1. table notification_objects
            const data_notification_objects = {
                entity_type_id: 1,
                entity_id: result?.id,
                url: null
            }

            const notification_objects = await NotificationObjectsRepository.create(data_notification_objects);
            // 2. table notification_changes
            const data_notification_changes = {
                notification_object_id: notification_objects.success.id,
                actor_id: data.user_id,
                actor_affected_id: null,
                entity_affected_type: null
            }

            NotificationChangesRepository.create(data_notification_changes);

            // 3. table notifications
            if(array_friend?.success?.length > 0){
                for (let index = 0; index < array_friend?.success?.length; index++) {
                    // console.log(array_friend.success[index]);
                    NotificationsRepository.create({notification_object_id:notification_objects.success.id,receiver_id: array_friend.success[index]})
                    
                }
            }
            // console.log(test_());
            
            if(result) return {success: result.id};
        } catch (error) {
            console.log(error);
            return {error: error.message}
        }
    },

    getFeed: async(user_id) => {
        try {
            
            let listFriends = [];
            let array_friend = await friendService.getAllFriendId(user_id) ;
            let array_friend_sent = await friendService.getAllFriendSentRequestId(user_id);
           
            // console.log(test_());
            // console.log(array_friend);
            // console.log(array_friend_sent);

            if(!array_friend.success && !array_friend_sent.success) return null;
            if(array_friend?.success){
                listFriends = [...listFriends,...array_friend.success];
            }
            if(array_friend_sent?.success){
                listFriends = [...listFriends,...array_friend_sent.success];
            }
            listFriends = [...listFriends,user_id]
           
            // console.log(listFriends);
            
            let resultQueryPosts = await sequelize.query(
                `
                SELECT DISTINCT posts.* 
                FROM posts
                left JOIN post_tags on post_tags.post_id = posts.id
                WHERE posts.user_id IN (${listFriends}) or post_tags.user_tag_id in (${listFriends})
                
                ORDER BY posts.createdAt DESC;
                `,{
                    type: sequelize.QueryTypes.SELECT
                }
            )
            // console.log(resultQueryPosts);
            // sau khi lấy được danh sách bài viết thì chèn thêm 
            for( const item of resultQueryPosts){
                // console.log(item.id);
                // lấy thông tin người dùng
                item.user = await userService.findById(item.user_id);
                let result = await postTagService.getUserIdByPostId(item.id);
                // console.log(result);
                item.usersTags = result.success;

                // lấy nội dung bài viết 
                let resultContent = await postContentService.getByPostId(item.id);
                if(resultContent.success) item.contents = resultContent.success;

                // lấy bầy tỏ cảm xúc
                let resultReactionPost = await postReactionService.getByPostId(item.id);
                if(resultReactionPost.success) item.reactions = resultReactionPost.success;

                // lấy số lượng bình luận của bài viết
                // let lengthComment = await postCommentService.getLengthCommentPost(item.id);
                let lengthComment = await postCommentService.getLengthCommentPost(item.id);

                // console.log(lengthComment);
                if(lengthComment.success) item.lengthComment = lengthComment.success;
                else item.lengthComment = 0;
            }

            // lấy nội dung bài viết
            // console.log(resultQueryPosts);
              

            
            return resultQueryPosts;
        } catch (error) {
            console.log(error);
            return {error: error.message}
        }
    },
    getFeed2: async(user_id) => {
        try {
            
            let listFriends = [];
            let array_friend = await friendService.getAllFriendId(user_id) ;
            let array_friend_sent = await friendService.getAllFriendSentRequestId(user_id);
           
            // console.log(test_());
            // console.log(array_friend);
            // console.log(array_friend_sent);

            if(!array_friend.success && !array_friend_sent.success) return null;
            if(array_friend?.success.length > 0){
                const filteredArray = array_friend.success.filter(value => value !== null);
                listFriends = [...listFriends,...filteredArray];
            }
            if(array_friend_sent?.success.length > 0){
                const filteredArray = array_friend_sent.success.filter(value => value !== null);
               
                listFriends = [...listFriends,...filteredArray];
            }
            listFriends = [...listFriends,user_id]
           
            // console.log(listFriends);
            
            let resultQueryPosts = await sequelize.query(
                `
                SELECT DISTINCT posts.* 
                FROM posts
                left JOIN post_tags on post_tags.post_id = posts.id
                WHERE posts.user_id IN (${listFriends}) or post_tags.user_tag_id in (${listFriends})
                
                ORDER BY posts.createdAt DESC;
                `,{
                    type: sequelize.QueryTypes.SELECT
                }
            )
            // console.log(resultQueryPosts);
            // sau khi lấy được danh sách bài viết thì chèn thêm 
            for( const item of resultQueryPosts){
                // console.log(item.id);
                // lấy thông tin người dùng
                item.user = await userService.findById(item.user_id);
                let result = await postTagService.getUserIdByPostId(item.id);
                // console.log(result);
                item.usersTags = result.success;

                // lấy nội dung bài viết 
                let resultContent = await postContentService.getByPostId(item.id);
                if(resultContent.success) item.contents = resultContent.success;

                // lấy bầy tỏ cảm xúc
                let resultReactionPost = await postReactionService.getByPostId(item.id);
                if(resultReactionPost.success) item.reactions = resultReactionPost.success;

                // lấy bình luận của bài viết
                let comments = await postCommentService.getCommentsPost(item.id);
            
                if(comments.success) item.comments = comments.success;
                else item.comments = [];

                // lấy số lượng bình luận của bài viết
                let lengthComment = await postCommentService.getLengthCommentPost(item.id);
                // console.log(lengthComment);
                if(lengthComment.success) item.lengthComment = lengthComment.success;
                else item.lengthComment = 0;
            }

            // lấy nội dung bài viết
            // console.log(resultQueryPosts);
              

            
            return resultQueryPosts;
        } catch (error) {
            console.log(error);
            return {error: error.message}
        }
    },
    getPost: async(post_id) => {
        try {
            
            let resultQueryPosts = await sequelize.query(
                `
                SELECT DISTINCT posts.* 
                FROM posts
                
                WHERE posts.id = ${post_id};
                `,{
                    type: sequelize.QueryTypes.SELECT
                }
            )

            // console.log(resultQueryPosts);

            // lấy thông tin người dùng
            resultQueryPosts[0].user = await userService.findById(resultQueryPosts[0].user_id);
            let result = await postTagService.getUserIdByPostId(resultQueryPosts[0].id);
            resultQueryPosts[0].usersTags = result.success;

             // lấy nội dung bài viết 
            let resultContent = await postContentService.getByPostId(resultQueryPosts[0].id);
            if(resultContent.success) resultQueryPosts[0].contents = resultContent.success;

            // lấy bầy tỏ cảm xúc
            let resultReactionPost = await postReactionService.getByPostId(resultQueryPosts[0].id);
            if(resultReactionPost.success) resultQueryPosts[0].reactions = resultReactionPost.success;

            let lengthComment = await postCommentService.getLengthCommentPost(resultQueryPosts[0].id);
            if(lengthComment.success) resultQueryPosts[0].lengthComment = lengthComment.success;
            else resultQueryPosts[0].lengthComment = 0;
            // lấy số lượng bình luận của bài viết
            let comments = await postCommentService.getCommentsPost(resultQueryPosts[0].id);
                // console.log(lengthComment);
            if(comments.success) resultQueryPosts[0].comments = comments.success;
            

            return resultQueryPosts;
        } catch (error) {
            console.log(error);
            return {error: error.message}
        }
    },

    getPostByUser: async(user_id) => {
        try {
            
            let resultQueryPosts = await sequelize.query(
                `
                SELECT DISTINCT posts.*
                FROM posts
                WHERE posts.user_id = ${user_id}

                UNION

                SELECT DISTINCT posts.*
                FROM posts
                INNER JOIN post_tags ON post_tags.post_id = posts.id
                WHERE post_tags.user_tag_id = ${user_id};
                `,{
                    type: sequelize.QueryTypes.SELECT
                }
            )

            // console.log(resultQueryPosts);

            for( const item of resultQueryPosts){
                // console.log(item.id);
                // lấy thông tin người dùng
                item.user = await userService.findById(item.user_id);
                let result = await postTagService.getUserIdByPostId(item.id);
                // console.log(result);
                item.usersTags = result.success;

                // lấy nội dung bài viết 
                let resultContent = await postContentService.getByPostId(item.id);
                if(resultContent.success) item.contents = resultContent.success;

                // lấy bầy tỏ cảm xúc
                let resultReactionPost = await postReactionService.getByPostId(item.id);
                if(resultReactionPost.success) item.reactions = resultReactionPost.success;

                // lấy bình luận
                let comments = await postCommentService.getCommentsPost(item.id);
                if(comments.success) item.comments = comments.success;
                else item.comments = [];
                // lấy số lượng bình luận của bài viết
                let lengthComment = await postCommentService.getLengthCommentPost(item.id);
                // console.log(lengthComment);
                if(lengthComment.success) item.lengthComment = lengthComment.success;
                else item.lengthComment = 0;
            }

            return resultQueryPosts;
        } catch (error) {
            console.log(error);
            return {error: error.message}
        }
    },

    delete: async(id) => {
        try {
            const res1 = await PostReaction.destroy({
                where:{
                    post_id: id
                }
            })
            // console.log('deleted post reaction');
            // console.log(res1);
            const res2 = await PostComment.destroy({
                where:{
                    post_id: id
                }
            })

            // console.log('deleted post comment');
            // console.log(res2);


            const res3 = await PostTag.destroy({
                where:{
                    post_id: id
                }
            })

            // console.log('deleted post tag');
            // console.log(res3);

            // const comments = await PostComment.findAll({
            //     where:{
            //         post_id: id
            //     }
            // })

            // for (let index = 0; index < comments.length; index++) {
            //     await 
                
            // }

            const res4 = await PostContent.destroy({
                where:{
                    post_id: id
                }
            })

            // console.log('deleted post content');
            // console.log(res4);

            const res = await Post.destroy({
                where:{
                    id: id
                }
            })

            // console.log('deleted post');
            // console.log(res);

            return {success:true};
        } catch (error) {
            console.log(error);
            return {error: error.message}
        }
    },

    update: async (post_id,data) => {
        try {
            const result = await Post.update(data,{
                where:{
                    id: post_id
                }
            })
            await postTagRepository.deleteUserTagsByPostId(post_id);
            await postContentRepository.deleteContentsByPostId(post_id);
            if(data?.user_tag_id){
                
                const dataInsertUserTag = data.user_tag_id.map((value) => {
                    return {
                        post_id: post_id,
                        user_tag_id: value
                    }
                }) 
                await postTagRepository.createMultiple(dataInsertUserTag);
            }
            if(data?.content){
                
                const dataInsertContent = data.content.map((value) => {
                    return {
                        post_id: post_id,
                        content: value.url,
                        type: value.type
                    }
                }) 
                await postContentRepository.createMultiple(dataInsertContent);
            }
            if (result[0] === 1) return {success: true}; // Kiểm tra số lượng bản ghi đã được cập nhật
            throw new Error("Could not update"); // Ném ra một lỗi nếu không cập nhật được bản ghi nào
        } catch (error) {
            console.log(error);
            return {error: error};
        }
    },

    getUserFromPostID: async (post_id) => {
        try {
            const result = await Post.findOne({
                where:{
                    id: post_id
                },
                include:[
                    {
                        model: User
                    }
                ]
            })

            if(result) return {success: result}
        } catch (error) {
            console.log(error);
            return {error: error}
        }
    }
}

module.exports = postRepository;