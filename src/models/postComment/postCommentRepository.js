const sequelize = require("../../db/configDB");
const CommentReaction = require("../commentReaction/commentReaction");
const NotificationChanges = require("../notificationChanges/notificationChanges");
const NotificationChangesRepository = require("../notificationChanges/notificationChangesRepository");
const NotificationObjectsRepository = require("../notificationObjects/notificationObjectsRepository");
const NotificationsRepository = require("../notifications/notificationsRepository");
const Post = require("../post/post");
// const postRepository = require("../post/postRepository");
const PostCommentContent = require("../postCommentContent/postCommentContent");
const postCommentContentRepository = require("../postCommentContent/postCommentContentRepository");
const PostReaction = require("../postReaction/postReaction");
const User = require("../user/user");
const PostComment = require("./postComment");

const postCommentRepository = {
    countDistinctUserCommentPost: async(post_id) => { //lấy số lượng người khác nhau đã bình luận 1 bài viết
        try {
            const result = await sequelize.query(
                `
                SELECT COUNT(DISTINCT user_id) AS num_commenters
                FROM post_comments
                WHERE post_id = ${post_id}  AND user_id != (SELECT user_id FROM post_comments WHERE post_id = ${post_id} LIMIT 1);
                `,
                {
                    type: sequelize.QueryTypes.SELECT,
                    logging: true,
                }
            );
            // console.log('Trả về số lượng người dùng khác nhau đã bình luận :');
            // console.log(result[0].num_commenters);
            if (result.length > 0) {
                // Trả về số lượng người dùng khác nhau đã bình luận
                return { success: result[0].num_commenters };
            } else {
                // Trường hợp không có kết quả
                return { success: 0 };
            }
        } catch (error) {
            console.log(error);
            return {error: error}
        }
    },
    countDistinctUserRepliesCommentPost: async(post_id,parent_id) => { //lấy số lượng người khác nhau đã trả lời 1 bình luận
        try {
            const result = await sequelize.query(
                `
                SELECT COUNT(DISTINCT user_id) AS num_commenters
                FROM post_comments
                WHERE post_id = ${post_id} AND parent_id = ${parent_id} AND user_id != (SELECT user_id FROM post_comments WHERE post_id = ${post_id} AND parent_id = ${parent_id} LIMIT 1);
                `,
                {
                    type: sequelize.QueryTypes.SELECT,
                    logging: true,
                }
            );
    
            if (result.length > 0) {
                // Trả về số lượng người dùng khác nhau đã bình luận
                return { success: result[0].num_commenters };
            } else {
                // Trường hợp không có kết quả
                return { success: 0 };
            }
        } catch (error) {
            console.log(error);
            return {error: error}
        }
    },
    // insert notifications
    insertNotification: async (data) => {
        /*
        kiểm tra xem có parent_id nếu có thì kiểm tra xem người đăng bài với parent_id có phải là 1 không.
        +) nếu là 1 người thì 
        -) kiểm tra xem đã có người thứ 3 trong bài phải hồi bình luận chưa nếu có thì thông báo (và những người khác đã trả lời bình luận của bạn)
        -) nếu không có người thứ 3 thì thông báo (đã trả lời bình luận của bạn)
        +) nếu không phải là 1 thì thông báo ( đã bình luận bài viết của bạn)
        -) kiểm tra xem có người thứ 3 đã bình luận bài viết chưa nếu có thì thông báo (và những người khác đã bình luận bài viết của bạn)
        -) nếu không có thì thông báo ( đã bình luận bài viết của bạn)
    
        nếu không có parent_id thì:
        +) kiểm tra xem đã có bình luận trước đó chưa
        -) nếu chưa có thì thông báo( đã bình luận bài viết của bạn)
        -) nếu có thì sửa lại thông báo về trạn thái chưa đọc và sủa thông báo thành (và những người khác đã bình luận bài viết của bạn)
    
    */
    
        const actor_post = await Post.findOne({
            where:{
                id: data.post_id
            },
            include:[
                {
                    model: User
                }
            ]
        });
        let user_parent_comment = null;
        // console.log(actor_post.user_id);
        // console.log(data.parent_id);

        // neu la chinh ban than binh luan
        // nếu không phải là trả lời bình luận của ai đó thì kết thúc không thông báo gì
        if(data.user_id == actor_post.user_id && !data.parent_id){
            // console.log("la chinh ban than ");
            return;
        }


    
        // nếu mà người comment trả lời comment của người đăng thì sẽ chỉ thông báo trả lời bình luận của bạn
    
        if(data.parent_id){
                // lấy thông tin của comment cha
                user_parent_comment = await postCommentRepository.getUserFromCommentID(data.parent_id)
                // console.log(user_parent_comment.success);

                // tiếp tục kiểm tra xem đã có bao nhiêu người trả lời bình luận
                const countDistinctUserRepliesCommentPostunt = await postCommentRepository.countDistinctUserRepliesCommentPost(data.post_id,data.parent_id);
                // kiểm tra xem người đăng bài với comment cha có phải là 1 không
                if(actor_post.user_id == user_parent_comment.success.user_id){
                    // nếu người đăng bài với comment cha là 1 người thì tiếp tục kiểm tra xem đã có ai bình luận trước đó chưa. nếu có bình luận trước đó rồi thì thông báo là "và những người khác đã trả lời bình luận của bạn" nếu chưa có thì thông báo "đã trả lời bình luận của bạn"
                    // console.log('người đăng bài với comment cha là 1');

                    // tiếp tục kiểm tra xem người bình luận với comment cha có phải là 1 người không
                    if(data.user_id == user_parent_comment.user_id){
                        // nếu người đăng bài với comment cha và người trả lời bình luận cùng là 1 người thì không thông báo gì
                        return;
                    }

                    
                    if(countDistinctUserRepliesCommentPostunt.success >= 1){

                        // cập nhập thông báo từ đã trả lời bình luận thành và những người khác đã trả lời bình luận của bạn

                        //1. đầu tiên sẽ xóa thông báo trước đó là "đã trả lời bình luận của bạn"

                            // lấy người trả lời bình luận này gần nhất thông qua post_id và comment cha id
                            const user_comment_latest = await sequelize.query(
                                `
                                SELECT user_id
                                FROM post_comments
                                WHERE post_id = ${data.post_id} AND parent_id = ${data.parent_id} and user_id != ${actor_post.user_id}
                                ORDER BY createdAt DESC
                                LIMIT 1;
                                `,
                                {
                                    type: sequelize.QueryTypes.SELECT,
                                    logging: true,
                                }
                            )
                            // console.log("user comment latest");
                            // console.log(user_comment_latest[0].user_id);

                            // lấy thông báo gần nhất thông qua người bình luận gần nhất thong qua post_id và actor_id
                            const notification_object_id = await sequelize.query(
                                `
                                SELECT notification_objects.id as id
                                FROM notification_changes
                                JOIN notification_objects on notification_changes.notification_object_id = notification_objects.id
                                WHERE notification_changes.actor_id = ${user_comment_latest[0].user_id} and notification_objects.entity_id = ${data.post_id};
                                `,
                                {
                                    type: sequelize.QueryTypes.SELECT,
                                    logging: true,
                                }
                            )
                            // console.log(notification_object_id[0].id);

                            if(notification_object_id.length > 0) await NotificationObjectsRepository.delete(notification_object_id[0].id);
                        //2. chèn thông báo "và những người khác đã trả lời bình luận của bạn"
                        //-------------  insert notifications ------------------------------
                        //1. table notification_objects
                        const data_notification_objects = {
                            entity_type_id: 23,
                            entity_id: data.post_id,
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
                        NotificationsRepository.create({notification_object_id:notification_objects.success.id,receiver_id: actor_post.user_id})
                        return;
                    }

                    // nếu chưa có 2 người trở lên thì chèn thông báo là "đã trả lời bình luận của bạn"


                    //-------------  insert notifications ------------------------------
                    //1. table notification_objects
                    const data_notification_objects = {
                        entity_type_id: 21,
                        entity_id: data.post_id,
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
                    NotificationsRepository.create({notification_object_id:notification_objects.success.id,receiver_id: actor_post.user_id})
                    
                    return;
                }

                // nếu người đăng bài và comment cha không phải là 1 thì sẽ phải thông báo cho tác giả của comment cha và cả tác giả bài viết
                // kiểm tra xem người bình luận và bình luận cha có phải 1 tác giả không. nếu là một thì chỉ thông báo cho tác giả bài viết 
                // 1. lại tiếp tục kiểm tra xem đã có bao nhiều người bình luận bài viết 
                if(countDistinctUserRepliesCommentPostunt.success >= 1 && data.user_id !== user_parent_comment.success.user_id) {
                    // nếu mà đã có người trả lời bình luận bài viết trước đó thì sẽ xóa đi thông báo cũ là đã trả lời bình luận của bạn thành và những người khác đã trả lời bình luận của bạn
                    // lấy người trả lời bình luận này gần nhất thông qua post_id và comment cha id
                    const user_comment_latest = await sequelize.query(
                        `
                        SELECT user_id
                        FROM post_comments
                        WHERE post_id = ${data.post_id} AND parent_id = ${data.parent_id} 
                        ORDER BY createdAt DESC
                        LIMIT 1;
                        `,
                        {
                            type: sequelize.QueryTypes.SELECT,
                            logging: true,
                        }
                    )
                    // console.log("user comment latest");
                    // console.log(user_comment_latest[0].user_id);

                    // lấy thông báo gần nhất thông qua người bình luận gần nhất thong qua post_id và actor_id
                    const notification_object_id = await sequelize.query(
                        `
                        SELECT notification_objects.id as id
                        FROM notification_changes
                        JOIN notification_objects on notification_changes.notification_object_id = notification_objects.id
                        WHERE notification_changes.actor_id = ${user_comment_latest[0].user_id} and notification_objects.entity_id = ${data.post_id};
                        `,
                        {
                            type: sequelize.QueryTypes.SELECT,
                            logging: true,
                        }
                    )
                    // console.log(notification_object_id[0].id);

                    if(notification_object_id.length > 0) await NotificationObjectsRepository.delete(notification_object_id[0].id);
                    //2. chèn thông báo "và những người khác đã trả lời bình luận của bạn"
                    //-------------  insert notifications ------------------------------
                    //1. table notification_objects
                    const data_notification_objects = {
                        entity_type_id: 23,
                        entity_id: data.post_id,
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
                    NotificationsRepository.create({notification_object_id:notification_objects.success.id,receiver_id: user_parent_comment.success.user_id})
                
                }else if(data.user_id !== user_parent_comment.success.user_id){
                    // nếu chưa có 2 người trở lên thì chèn thông báo là "đã trả lời bình luận của bạn"


                    //-------------  insert notifications ------------------------------
                    //1. table notification_objects
                    const data_notification_objects = {
                        entity_type_id: 21,
                        entity_id: data.post_id,
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
                    NotificationsRepository.create({notification_object_id:notification_objects.success.id,receiver_id: user_parent_comment.success.user_id})
                    
                }

                // và sau đó là chèn thêm thông báo là 

                
                
            }

        // kiểm tra xem đã có bao nhiêu người bình luận trước đó
        const countDistinctUserCommentPost_ = await postCommentRepository.countDistinctUserCommentPost(data.post_id);
        // console.log("số người đã bình luận trước đó là "+countDistinctUserCommentPost_.success);
        // 1. nếu đã có người bình luận trước đó thì chèn thông báo "và những người khác đã bình luận bài viết của bạn"
        if(countDistinctUserCommentPost_.success  >= 1) {
            // nếu mà đã có người trả lời bình luận bài viết trước đó thì sẽ xóa đi thông báo cũ là đã trả lời bình luận của bạn thành và những người khác đã trả lời bình luận của bạn
            // lấy người trả lời bình luận này gần nhất thông qua post_id 
            const user_comment_latest = await sequelize.query(
                `
                SELECT user_id
                FROM post_comments
                WHERE post_id = ${data.post_id} AND user_id != ${actor_post.user_id} 
                ORDER BY createdAt DESC
                LIMIT 1;
                `,
                {
                    type: sequelize.QueryTypes.SELECT,
                    logging: true,
                }
            )
            // console.log("user comment latest");
            // console.log(user_comment_latest[0].user_id);

            // lấy thông báo gần nhất thông qua người bình luận gần nhất thong qua post_id và actor_id
            const notification_object_id = await sequelize.query(
                `
                SELECT notification_objects.id as id
                FROM notification_changes
                JOIN notification_objects on notification_changes.notification_object_id = notification_objects.id
                JOIN notifications on notification_objects.id = notifications.notification_object_id
                WHERE notification_changes.actor_id = ${user_comment_latest[0].user_id} and notification_objects.entity_id = ${data.post_id} and notifications.receiver_id = ${actor_post.user_id} ;
                `,
                {
                    type: sequelize.QueryTypes.SELECT,
                    logging: true,
                }
            )

            // console.log("notification_object_id :");
            // console.log(notification_object_id);

            if(notification_object_id.length > 0) await NotificationObjectsRepository.delete(notification_object_id[0].id);
            //2. chèn thông báo "và những người khác đã trả lời bình luận của bạn"
            //-------------  insert notifications ------------------------------
            //1. table notification_objects
            const data_notification_objects = {
                entity_type_id: 22,
                entity_id: data.post_id,
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
            NotificationsRepository.create({notification_object_id:notification_objects.success.id,receiver_id: actor_post.user_id})
            return;
        }

        //-------------  insert notifications ------------------------------
            //1. table notification_objects
            const data_notification_objects = {
                entity_type_id: 20,
                entity_id: data.post_id,
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
            NotificationsRepository.create({notification_object_id:notification_objects.success.id,receiver_id: actor_post.user_id})
    
    },
    
    create: async (data) => {
        try {
            await postCommentRepository.insertNotification(data);
            let result = await PostComment.create(data);
            
            if(result) return {success: result.id}
        } catch (error) {
            console.log(error);
            return {error: error.message}
        }
    },
    delete: async (comment_id) => {
        try {
            // await postCommentRepository.insertNotification(data);
            await PostComment.destroy({
                where:{id: comment_id}
            });
          

            await PostComment.destroy({
                where:{
                    parent_id: comment_id
                }
            })

            
            if(result) return {success: result.id}
        } catch (error) {
            console.log(error);
            return {error: error.message}
        }
    },
    getLengthCommentPost: async (post_id) => {
        try {
            // console.log(post_id);
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
                    },
                    {
                        model: PostCommentContent
                    },
                    {
                        model: CommentReaction
                    }
                ]
            });

            if(result) return {success: result}

        } catch (error) {
            return {error: error.message}
        }
    },
    getUserFromCommentID: async (comment_id) => {
        try {
            let result = await PostComment.findOne({
                where: {
                    id: comment_id
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

module.exports = postCommentRepository;