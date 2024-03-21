const sequelize = require("../../db/configDB");
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
            console.log(id);
            let result = await sequelize.query(`
            SELECT user_name, phone, avatar, status, user_id as sender, friend_id as receiver,id
            FROM friends AS f
            JOIN users AS u ON (f.friend_id = u.id OR f.user_id = u.id)
            WHERE (f.user_id = ${id} OR f.friend_id = ${id}) AND f.status = 'accepted' AND u.id != ${id};
            `, { type: sequelize.QueryTypes.SELECT });
        
            console.log('Danh sách bạn bè của User có id =', id, ':', result);
            return { success: result };
        } catch (error) {
            console.error('Lỗi khi lấy danh sách bạn bè:', error);
            return { error: error };
        }
    },
    getSentRequests: async (id) => {
        try {
            console.log(id);
            let result = await sequelize.query(`
            SELECT user_name, phone, avatar, status, user_id as sender, friend_id as receiver,id
            FROM friends AS f
            JOIN users AS u ON f.friend_id = u.id
            WHERE f.user_id = ${id} AND f.status = 'pending' AND u.id != ${id};
            `, { type: sequelize.QueryTypes.SELECT });
        
            console.log('Danh sách bạn bè của User có id =', id, ':', result);
            return { success: result };
        } catch (error) {
            console.error('Lỗi khi lấy danh sách bạn bè:', error);
            return { error: error };
        }
    },

    getReceivedRequests: async (id) => {
        try {
            console.log(id);
            let result = await sequelize.query(`
            SELECT user_name, phone, avatar, status, user_id as sender, friend_id as receiver,id
            FROM friends AS f
            JOIN users AS u ON  f.user_id = u.id
            WHERE f.friend_id = ${id} AND f.status = 'pending' AND u.id != ${id};
            `, { type: sequelize.QueryTypes.SELECT });
        
            console.log('Danh sách bạn bè của User có id =', id, ':', result);
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
            return null;
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
            return null;
        } catch (error) {
            console.log(error);
            return {error: error.message}
        }
    }
    
}

module.exports = friendRepository;