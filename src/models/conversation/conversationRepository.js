const Conversation = require("./conversation");
const { Op } = require('sequelize');
const sequelize = require("../../db/configDB");
const User = require("../user/user");
const UserConversation = require("../userConversation/userConversation");
const Message = require("../message/message");

const conversationRepository = {
    create: async (data) => {
        try {
            const result = await Conversation.create(data);
            if(result) return {success: result.id};
        } catch (error) {
            console.log(error);
            return {error: error}
        }
    },
    createGroup: async (data) => {
        try {
            let data2 = {...data,type: 'room', status: 'pending'}
            const modifiedName = data2.name.replace(/\s+/g, ' ');
            console.log(data2.name);
            data2.name = modifiedName;
            const result = await Conversation.create(data2);
            if(result) return {success: result.id};
        } catch (error) {
            console.log(error);
            return {error: error}
        }
    },
    getPrivateConversationFromUser: async (user_id_1, user_id_2)=> {
        try {
            let result = await sequelize.query(`
            SELECT c.id AS conversation_id
            FROM conversations c
            JOIN user_conversations uc ON c.id = uc.conversation_id
            WHERE uc.user_id IN (${user_id_1}, ${user_id_2}) 
            GROUP BY c.id
            HAVING COUNT(DISTINCT uc.user_id) = 2;
            `, { type: sequelize.QueryTypes.SELECT });
        
            // console.log('Danh sách bạn bè của User có id =', id, ':', result);
            if(result.length > 0){
                return { success: result };
            }
            return null;
            
        } catch (error) {
            console.log(error);
            return {error: error}
        }
    },

    getUserFromConversationID: async(id) => {
        try {
            let result = await Conversation.findByPk(id,{
                
                
                include: [
                    {
                        model: User,
                        through: {
                            model: UserConversation,
                            where: { status: 'accept' } // Lọc theo trạng thái 'pending'
                        }, // Chú ý thêm thông tin này để Sequelize hiểu quan hệ
                        as: 'users', // Đặt tên cho quan hệ, sử dụng khi truy vấn
                        
                    }
                ]
            })

            // let result = await Conversation.findAll({
            //     where: {
            //         id: id
            //     },
                
            //     include: [
            //         {
            //             model: User,
            //             through: UserConversation, // Chú ý thêm thông tin này để Sequelize hiểu quan hệ
            //             as: 'users' // Đặt tên cho quan hệ, sử dụng khi truy vấn
            //         }
            //     ]
            // })
            if(result) return result;
            return false;
        } catch (error) {
            console.log(error);
            return {error: error}
        }
    },

    getUserPendingFromConversationID: async(id) => {
        try {
            let result = await Conversation.findByPk(id,{
                
                
                include: [
                    {
                        model: User,
                        through: {
                            model: UserConversation,
                            where: { status: 'pending' } // Lọc theo trạng thái 'pending'
                        }, // Chú ý thêm thông tin này để Sequelize hiểu quan hệ
                        as: 'users', // Đặt tên cho quan hệ, sử dụng khi truy vấn
                        
                    }
                ]
            })

            // let result = await Conversation.findAll({
            //     where: {
            //         id: id
            //     },
                
            //     include: [
            //         {
            //             model: User,
            //             through: UserConversation, // Chú ý thêm thông tin này để Sequelize hiểu quan hệ
            //             as: 'users' // Đặt tên cho quan hệ, sử dụng khi truy vấn
            //         }
            //     ]
            // })
            if(result) return result;
            return false;
        } catch (error) {
            console.log(error);
            return {error: error}
        }
    },
    searchAllConversation: async (name,user_id) => {
        try {
            let resultQuerryConversation = await sequelize.query(`
            SELECT conversations.* from conversations 
            JOIN user_conversations on user_conversations.conversation_id = conversations.id
            WHERE conversations.name LIKE '%${name}%' and user_conversations.user_id = ${user_id};
                `, { type: sequelize.QueryTypes.SELECT });
            
                let resultQuerryUser = await sequelize.query(`
            SELECT 
                u.*
            FROM 
                friends f
            JOIN 
                users u ON (f.user_id = u.id OR f.friend_id = u.id)
            WHERE 
                (u.user_name like '%${name}%' AND (f.user_id = ${user_id} OR f.friend_id = ${user_id}));
                `, { type: sequelize.QueryTypes.SELECT });

            // console.log(resultQuerryConversation);
            // console.log(resultQuerryUser);
            let result = [...resultQuerryConversation, ...resultQuerryUser];
            if(result.length > 0) return {success: result}
            return null;
        } catch (error) {
            console.log(error);
            return {error: error}
        }
    },
    
    searchAllConversationGroups: async (name,address_id,school_id) => {
        try {

            //case 1:  full field search (name,school_id, address_id)
            let queryString = null;
            if(school_id && address_id){
                queryString =  ` SELECT conversations.* from conversations 
                                WHERE conversations.name LIKE '%${name}%' and conversations.address_id = ${address_id} and conversations.school_id = ${school_id};`
            }
            else
            // case 2: only field name and address_id
            if(!school_id && address_id){
                queryString =  ` SELECT conversations.* from conversations 
                                WHERE conversations.name LIKE '%${name}%' and conversations.address_id = ${address_id};`
            }
            else
            // case 3: only field name 
                queryString =  ` SELECT conversations.* from conversations 
                                WHERE conversations.name LIKE '%${name}%';`
            
            
            let result = await sequelize.query(queryString, { type: sequelize.QueryTypes.SELECT });
            
            if(result.length > 0) return {success: result}
            return null;
        } catch (error) {
            console.log(error);
            return {error: error}
        }
    },

    searchAllConversationGroups2: async (name,address_name,school_name,faculty_name) => {
        try {
            let queryString = null;
                const modifiedName = name.replace(/\s+/g, ' ');
                queryString =  ` SELECT conversations.*, addresses.name AS address_name, schools.name AS school_name, faculties.name AS faculty_name 
                                FROM conversations 
                                JOIN addresses ON conversations.address_id = addresses.id
                                JOIN schools ON conversations.school_id = schools.id
                                JOIN faculties ON conversations.faculty_id = faculties.id
                                WHERE conversations.name LIKE '%${modifiedName}%' AND addresses.name LIKE '%${address_name}%' AND schools.name LIKE '%${school_name}%' AND faculties.name LIKE '%${faculty_name}%';`
            
            // console.log(queryString);
       
            
            let result = await sequelize.query(queryString, { type: sequelize.QueryTypes.SELECT });
            
            if(result.length > 0) return {success: result}
            return null;
        } catch (error) {
            console.log(error);
            return {error: error}
        }
    },

    // get all converstation from user
    getAllConversationFromUser: async(user_id) => {
        try {
            let result = await sequelize.query(`
            SELECT
                conversations.id AS conversation_id,
                conversations.name AS conversation_name,
                conversations.type,
                conversations.avatar,
                MAX(messages.createdAt) AS latest_message_time
            FROM
                user_conversations
            JOIN
                conversations ON user_conversations.conversation_id = conversations.id
            LEFT JOIN
                messages ON conversations.id = messages.conversation_id
            WHERE
                user_conversations.user_id = ${user_id}
            GROUP BY
                conversations.id, conversations.name
            ORDER BY
                latest_message_time DESC;
            `, { type: sequelize.QueryTypes.SELECT });
        
            // console.log('Danh sách bạn bè của User có id =', id, ':', result);
            if(result.length > 0){
                return { success: result };
            }
            return { success: [] };
        } catch (error) {
            console.log(error);
            return {error: error}
        }
    },


    // get all converstation from user
    getAllConversationGroupsByUser: async(user_id) => {
        try {
            let result = await sequelize.query(`
            SELECT
                conversations.id AS conversation_id,
                conversations.name AS conversation_name,
                conversations.type,
                conversations.avatar,
                MAX(messages.createdAt) AS latest_message_time
            FROM
                user_conversations
            JOIN
                conversations ON user_conversations.conversation_id = conversations.id
            LEFT JOIN
                messages ON conversations.id = messages.conversation_id
            WHERE
                user_conversations.user_id = ${user_id} and conversations.type = 'room'
            GROUP BY
                conversations.id, conversations.name
            ORDER BY
                latest_message_time DESC;
            `, { type: sequelize.QueryTypes.SELECT });
        
            // console.log('Danh sách bạn bè của User có id =', id, ':', result);
            if(result.length > 0){
                return { success: result };
            }
            return { success: [] };
        } catch (error) {
            console.log(error);
            return {error: error}
        }
    },

    getAllMessageFromConversation: async (id) => {
        try {
            let result = await Conversation.findByPk(id,{
                
                include: [
                    {
                        model: Message
                    }
                ],
                limit: 16
            })
            if(result) return { success: result};
            return false;
        } catch (error) {
            console.log(error);
            return {error: error}
        }
    }

}

module.exports = conversationRepository;


/*
let result = await sequelize.query(`
            SELECT c.id AS conversation_id
            FROM conversations c
            JOIN user_conversations uc ON c.id = uc.conversation_id
            WHERE uc.user_id IN (${user_id_1}, ${user_id_2}) and c.type = 'user'
            GROUP BY c.id
            HAVING COUNT(DISTINCT uc.user_id) = 2;
            `, { type: sequelize.QueryTypes.SELECT });
*/