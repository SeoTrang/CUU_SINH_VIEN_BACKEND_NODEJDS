const sequelize = require("../../db/configDB");
const NotificationChangesRepository = require("../notificationChanges/notificationChangesRepository");
const NotificationObjectsRepository = require("../notificationObjects/notificationObjectsRepository");
const NotificationsRepository = require("../notifications/notificationsRepository");
const Friend = require("./friend");

const friendRepository = {
    create: async (data) => {
        try {
            let result = await Friend.create(data);
            if(result) return {success: true};
        } catch (error) {
            console.log(error);
            return {error: error}
        }
    },
    getAllFriends: async (id) => {
        try {
            // console.log(id);
            let result = await sequelize.query(`
            SELECT user_name, phone, avatar, status, user_id as sender, friend_id as receiver,id
            FROM friends AS f
            JOIN users AS u ON (f.friend_id = u.id OR f.user_id = u.id)
            WHERE (f.user_id = ${id} OR f.friend_id = ${id}) AND f.status = 'accepted' AND u.id != ${id};
            `, { type: sequelize.QueryTypes.SELECT });
        
            // console.log('Danh sách bạn bè của User có id =', id, ':', result);
            return { success: result };
        } catch (error) {
            console.error('Lỗi khi lấy danh sách bạn bè:', error);
            return { error: error };
        }
    },
    checkExists: async (user_send_request_id,user_receive_id)=> {
        try {
            let result = await sequelize.query(`
            SELECT *
            FROM friends AS f
            WHERE (f.user_id = ${user_send_request_id} and f.friend_id = ${user_receive_id}) or (f.user_id = ${user_receive_id} and f.friend_id = ${user_send_request_id});
            `, { type: sequelize.QueryTypes.SELECT });
            // console.log(result);
            if(result.length > 0) return true;
            return false;
        } catch (error) {
            console.error( error);
            return { error: error.message };
        }
    },
    getSentRequests: async (id) => {
        try {
            // console.log(id);
            let result = await sequelize.query(`
            SELECT user_name, phone, avatar, status, user_id as sender, friend_id as receiver,id
            FROM friends AS f
            JOIN users AS u ON f.friend_id = u.id
            WHERE f.user_id = ${id} AND f.status = 'pending' AND u.id != ${id};
            `, { type: sequelize.QueryTypes.SELECT });
        
            // console.log('Danh sách bạn bè của User có id =', id, ':', result);
            return { success: result };
        } catch (error) {
            console.error('Lỗi khi lấy danh sách bạn bè:', error);
            return { error: error };
        }
    },

    getReceivedRequests: async (id) => {
        try {
            // console.log(id);
            let result = await sequelize.query(`
            SELECT user_name, phone, avatar, status, user_id as sender, friend_id as receiver,id
            FROM friends AS f
            JOIN users AS u ON  f.user_id = u.id
            WHERE f.friend_id = ${id} AND f.status = 'pending' AND u.id != ${id};
            `, { type: sequelize.QueryTypes.SELECT });
        
            // console.log('Danh sách bạn bè của User có id =', id, ':', result);
            return { success: result };
        } catch (error) {
            console.error('Lỗi khi lấy danh sách bạn bè:', error);
            return { error: error };
        }
    },

    getAllFriendId: async (user_id) => {
        try {
            const resultQueryFriend = await sequelize.query(
                `
                SELECT 
                    CASE
                        WHEN f.user_id = ${user_id} THEN f.friend_id
                        WHEN f.friend_id = ${user_id} THEN f.user_id
                    END AS friend_id
                FROM friends f
                WHERE (f.user_id = ${user_id} OR f.friend_id = ${user_id})
                    AND f.status = 'accepted';
                `,
                {type: sequelize.QueryTypes.SELECT}
            )
            // console.log(resultQueryFriend);
            let array_friend = resultQueryFriend.map((value) => value.friend_id);
            if(resultQueryFriend.length > 0) return {success: array_friend}
            return {success: null};
        } catch (error) {
            console.log(error);
            return {error: error.message}
        }
    },
    getAllFriendSentRequestId: async (user_id) => {
        try {
            

            const resultQueryFriendFollow = await sequelize.query(
                `
                SELECT
                    CASE
                        WHEN f.user_id = ${user_id} THEN f.friend_id
                    END AS friend_id
                FROM friends f
                WHERE f.user_id = ${user_id}
                    AND f.status = 'pending';
                `,
                {type: sequelize.QueryTypes.SELECT}
            )
            // console.log(resultQueryFriendFollow);

            
            let array_friend_sent = resultQueryFriendFollow.map((value) => value.friend_id);
            if(array_friend_sent.length > 0) return {success: array_friend_sent}
            return {success: null};
        } catch (error) {
            console.log(error);
            return {error: error.message}
        }
    },

    SentRequests: async (user_send_request_id,user_receive_id) => {
        try {
            const friend = {
                user_id: user_send_request_id,
                friend_id: user_receive_id
            }
            const result = await Friend.create(friend);
            //-------------  inseart notifications ------------------------------
            //1. table notification_objects
            const data_notification_objects = {
                entity_type_id: 5,
                entity_id: null,
                url: null
            }

            const notification_objects = await NotificationObjectsRepository.create(data_notification_objects);
            // 2. table notification_changes
            const data_notification_changes = {
                notification_object_id: notification_objects.success.id,
                actor_id: user_send_request_id,
                actor_affected_id: null,
                entity_affected_type: null
            }

            NotificationChangesRepository.create(data_notification_changes);

            // 3. table notifications
            NotificationsRepository.create({notification_object_id:notification_objects.success.id,receiver_id: user_receive_id})
            
            
            if(result.friendship_id) return {success: result}
        } catch (error) {
            console.log(error);
            return {error: error.message}
        }
    },

    
    updateStatusFriend: async (friendShip_id,status,user_id,friend_id) => {
        try {
            const result = await Friend.update({
                status: status
            },
            {
                where: {
                    friendShip_id: friendShip_id
                }
            })

            if(status == 'accepted'){
            //-------------  inseart notifications ------------------------------
            //1. table notification_objects
            const data_notification_objects = {
                entity_type_id: 6,
                entity_id: null,
                url: null
            }

            const notification_objects = await NotificationObjectsRepository.create(data_notification_objects);
            // 2. table notification_changes
            const data_notification_changes = {
                notification_object_id: notification_objects.success.id,
                actor_id: user_id,
                actor_affected_id: null,
                entity_affected_type: null
            }

            NotificationChangesRepository.create(data_notification_changes);

            // 3. table notifications
            NotificationsRepository.create({notification_object_id:notification_objects.success.id,receiver_id: friend_id})
            
            }

            return {success: result}
        } catch (error) {
            console.log(error);
            return {error: error.message}
        }
    },
    getFriendShip: async (user_id,friend_id)=> {
        try {
            let result = await sequelize.query(`
            SELECT *
            FROM friends AS f
            WHERE (f.user_id = ${user_id} and f.friend_id = ${friend_id}) or (f.user_id = ${friend_id} and f.friend_id = ${user_id});
            `, { type: sequelize.QueryTypes.SELECT });
            // console.log(result);
            if(result.length > 0) return {success: result};
        } catch (error) {
            console.log(error);
            return {error: error.message}
        }
    },
    deleteFriendShip: async(friendship_id)=> {
        try {
            const resultdelete = await Friend.destroy({
                where: {
                    friendship_id: friendship_id
                }
            })
            if(resultdelete) return {success: resultdelete}
        } catch (error) {
            console.log(error);
            return {error: error.message}
        }
    },
    getRecomendFriendIds: async (user_id) => {
        try{
            const resultQueryFriend = await sequelize.query(
                `
                SELECT 
                    CASE
                        WHEN f.user_id = ${user_id} THEN f.friend_id
                        WHEN f.friend_id = ${user_id} THEN f.user_id
                    END AS friend_id
                FROM friends f
                WHERE (f.user_id = ${user_id} OR f.friend_id = ${user_id});
                `,
                {type: sequelize.QueryTypes.SELECT}
            )
            // console.log(resultQueryFriend);
            let array_friend = resultQueryFriend.map((value) => value.friend_id);

            // Tạo danh sách bạn bè
            let friendList = array_friend.join(',');

            // Lấy danh sách những người không nằm trong danh sách bạn bè
            const resultQueryNonFriends = await sequelize.query(
                `
                SELECT id
                FROM users
                WHERE id NOT IN (${friendList}) AND id != ${user_id}
                `,
                { type: sequelize.QueryTypes.SELECT }
            );

            let array_non_friends = resultQueryNonFriends.map((value) => value.id);

            return array_non_friends;
        }catch(err){
            console.log(err);
            return {error: err.message}
        }
    }
}

module.exports = friendRepository;