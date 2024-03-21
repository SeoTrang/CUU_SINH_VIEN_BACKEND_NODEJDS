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
            return {error: error};
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