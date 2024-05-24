const UserConversation = require("./userConversation");

const userConversationRepository = {
    create: async (data) => {
        try {
            // console.log(data);
            // return true;
            // const dataSave = {
            //     ...data,
            //     status: 'pending'
            // }
            let result = await UserConversation.create(data);
            if(result) return {success: true};
            throw new Error('Could not create');
        } catch (error) {
            console.log(error);
            return {error: error.message};
        }
    },
    createV2: async (data) => {
        try {
            // console.log(data);
            // return true;
            let result = await UserConversation.create(data);
            if(result) return result;
        } catch (error) {
            throw error;
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
    },

    delete: async(user_id, conversation_id)=> {
        try{
            const result = await UserConversation.destroy({
                where: {
                    user_id: user_id,
                    conversation_id: conversation_id
                }

                
            })

            if(result) return true;
        }catch(error){
            // console.log(error);
            throw error;
        }
    },

    checkUserExist: async(group_id, user_id)=>{
        try {
            const result = await UserConversation.findOne({
                where: {
                    user_id: user_id,
                    conversation_id: group_id
                }
            });
            
            return !!result;
        } catch (error) {
            // console.log(error);
            throw error;
        }
    }
}

module.exports = userConversationRepository;