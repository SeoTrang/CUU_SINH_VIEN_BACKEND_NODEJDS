const UserConversation = require("./userConversation");

const userConversationRepository = {
    create: async (data) => {
        try {
            // console.log(data);
            // return true;
            let result = await UserConversation.create(data);
            if(result) return {success: true};
            throw new Error('Could not create');
        } catch (error) {
            console.log(error);
            return {error: error.message};
        }
    },
    update: async (data) => {
        try {
            // console.log(data);
            // return true;
            const {userData, userAccept_id} = data;
            // console.log(userData);
            // console.log(userAccept_id);
            const user_conversation = await UserConversation.findOne({
                where:{
                    conversation_id: userData.conversation_id,
                    user_id: userData.user_id
                }
            })
            // console.log(user_conversation);
            if(!user_conversation) throw new Error('can not find user conversation');
            if(user_conversation.user_id == userAccept_id) throw new Error('can not accept yourselt')
            let result = await UserConversation.update(userData,{
                where:{
                    id: user_conversation.id
                }
            });
            if (result[0] === 1) return {success: true}; 
            throw new Error('Could not create');
        } catch (error) {
            console.log(error);
            return {error: error.message};
        }
    },

    getListUserInConversation: async (id) => {
        try {
            let result = await UserConversation.findAll({
                where:{
                    id: id
                }
            })
            if(result) return {success: result};
        } catch (error) {
            console.log(error);
            return {error: error};
        }
    }
}

module.exports = userConversationRepository;