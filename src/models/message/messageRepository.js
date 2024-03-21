const MessageContent = require("../MessageContent/MessageContent");
const User = require("../user/user");
const Message = require("./message");

const messageRepository = {
    create: async (data) => {
        try {
            const result = await Message.create(data);
            if(result) return {success: result.id};
        } catch (error) {
            console.log(error);
            return {error: error}
        }
    },
    getLatestMessageByConversationId: async (conversationId) => {
        try {
            const latestMessage = await Message.findOne({
                where: {
                    conversation_id: conversationId,
                },
                order: [['createdAt', 'DESC']], // Order by createdAt in descending order
                limit: 1, // Limit to one result (the latest message)
                include: [
                    {
                        model: MessageContent,
                        attributes: ['id', 'content'], // Specify the attributes you want to include
                    },
                ],
            });

            return latestMessage;
        } catch (error) {
            console.log(error);
            return { error: error };
        }
    },

    getMessageFromConversation: async (conversation_id) => {
        try {
            const messages = await Message.findAll({
                where: {
                    conversation_id: conversation_id,
                },
                order: [['createdAt', 'DESC']], // Order by createdAt in descending order
                limit: 16, // Limit to one result (the latest message)
                include: [
                    {
                        model: User
                    },
                    {
                        model: MessageContent
                    }
                ],
            });
            return {success: messages}
        } catch (error) {
            console.log(error);
            return { error: error };
        }
    },

    getMessageReverseFromConversation: async (conversation_id) => {
        try {
            // console.log("test 123");
            const messages = await Message.findAll({
                where: {
                    conversation_id: conversation_id,
                },
                order: [['id', 'DESC']], 
                limit: 16, // Limit to one result (the latest message)
                include: [
                    {
                        model: User
                    },
                    {
                        model: MessageContent
                    }
                ],
                
            });
           
            return {success: messages}
        } catch (error) {
            console.log(error);
            return { error: error };
        }
    }

}

module.exports = messageRepository;