const conversationService = require('../services/conversationService');
const messageService = require('../services/messageService');
const userConversationService = require('../services/userConversationService'); 
// const seenService = require('../services/seenService');
const conversationController = {

    // insert conversation chat 1 to 1
    createPrivateConversation: async (req,res) => {
        try {
            const user1_id = req.body.data.user1_id;
            const user2_id = req.body.data.user2_id;
            if(!user1_id || !user2_id) return res.status(400).json('missing data');
            const data = {

            }
            const conversation_id = await conversationService.create(data);
            
            // insert user 1 to conversation
            await userConversationService.create({user_id: user1_id,conversation_id: conversation_id})
            // insert user 2 to conversation
            await userConversationService.create({user_id: user2_id,conversation_id: conversation_id})

            return res.status(200).json(conversation_id.success);


        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error});
        }
    },

    // insert conversation chat room
    createGroupConversation: async (req,res) => {
        try {
            const school_id = req.body.data.school_id;
            const address_id = req.body.data.address_id;
            const name = req.body.data.name;
            const creater_id = req.body.decode.id;

            const listAvatar = [
                '/img/avatar_default/gr-avatar-1.svg',
                '/img/avatar_default/gr-avatar-2.svg',
                '/img/avatar_default/gr-avatar-3.svg',
                '/img/avatar_default/gr-avatar-4.svg',
                '/img/avatar_default/gr-avatar-5.svg',
                '/img/avatar_default/gr-avatar-6.svg',
                '/img/avatar_default/gr-avatar-7.svg',
                '/img/avatar_default/gr-avatar-8.svg',
                '/img/avatar_default/gr-avatar-9.svg',
                '/img/avatar_default/gr-avatar-10.svg',
                '/img/avatar_default/gr-avatar-11.svg',
            ]
            // Generate a random index within the range of the array length
            const randomIndex = Math.floor(Math.random() * listAvatar.length);

            // Get the random avatar URL using the random index
            const randomAvatar = listAvatar[randomIndex];

            const dataConversation = {
                school_id: school_id,
                address_id: address_id,
                name: name,
                avatar: randomAvatar
            }
            const conversation_id = await conversationService.createGroup(dataConversation);
            
            // insert user admin to conversation
            const userAdminData = {
                user_id: creater_id,
                conversation_id: conversation_id.success,
                is_admin: true
            }
            await userConversationService.create(userAdminData);
            // insert list user to conversation
            // for (let index = 0; index < arr_user.length; index++) {
            //     await userConversationService.create({user_id: arr_user[index],conversation_id: conversation_id})
                
            // }

            return res.status(200).json(conversation_id.success);
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error});
        }
    },

    getPrivateConversationFromUser: async (req,res) => {
        try {
            console.log(req.params.user_id);
            console.log(req.body.decode);
            const user_id_1 = req.body.decode.id;
            const user_id_2 = req.params.user_id;
            if(!user_id_1 || !user_id_2) return res.status(400).json('missing data');
            let conversation_id = await conversationService.getPrivateConversationFromUser(user_id_1,user_id_2);


        
            if(conversation_id){
                console.log(conversation_id.success[0].conversation_id);
                return res.status(200).json(conversation_id.success[0].conversation_id);
            }

            const data = {

            }
            const conversation_id_2 = await conversationService.create(data);
        
            // insert user 1 to conversation
            
            await userConversationService.create({user_id: user_id_1,conversation_id: conversation_id_2.success})
            // insert user 2 to conversation
            await userConversationService.create({user_id: user_id_2,conversation_id: conversation_id_2.success})
            
            return res.status(200).json(conversation_id_2.success);

        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error});
        }
    },

    getUserFromConversationID: async(req,res)=> {
        try {
            const conversation_id = req.params.conversation_id;
            if(!conversation_id) return res.status(400).json('missing data');
            const result = await conversationService.getUserFromConversationID(conversation_id);
            res.json(result);
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error});
        }
    },

    getAllConversationFromUser: async (req,res) => {
        try {
            let user_id = req.body.decode.id;
            let result = await conversationService.getAllConversationFromUser(user_id);
            // console.log(result);
            
            let data = result.success;
            for (let index = 0; index < data.length; index++) {
                
                    
                    let listUser = await conversationService.getUserFromConversationID(data[index].conversation_id);
                    

                    let latestMessage = await messageService.getLatestMessageByConversationId(data[index].conversation_id);

                    data[index] = data[index] = {
                        ...data[index],
                        users: listUser.users, // Flatten the structure and move "users" directly under each conversation object
                        latestMessage: latestMessage
                    };


                
                
            }
            return res.json(data);
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error});
        }
    },

    getByName: async (req,res) => {
        try {
            const userName = req.query.name;
            const address_id = req.query.address;
            const school_id = req.query.school;


        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error});
        }
    },

    getAllConversationGroupsByUser: async (req,res) => {
        try {
            let user_id = req.body.decode.id;
            let result = await conversationService.getAllConversationGroupsByUser(user_id);
            console.log(result);
            let data = result.success;
            for (let index = 0; index < data.length; index++) {
                if(data[index].type == 'room'){
                    
                    let listUser = await conversationService.getUserFromConversationID(data[index].conversation_id);
                    

                    let latestMessage = await messageService.getLatestMessageByConversationId(data[index].conversation_id);

                    data[index] = data[index] = {
                        ...data[index],
                        users: listUser.users, // Flatten the structure and move "users" directly under each conversation object
                        latestMessage: latestMessage
                    };


                }
                
            }
            return res.json(data);
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error});
        }
    },

    searchAllConversation: async (req,res ) => {
        try {
            const conversationName = req.query.name;
            const user_id = req.body.decode.id;
            if(!conversationName || !user_id) return res.status(400).json('missing data');
            let result = await conversationService.searchAllConversation(conversationName,user_id);
            if(result == null) return res.status(404).json('not found');
            if(result.success) return res.status(200).json(result.success);
            throw new Error(result.error);
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error});
        }
    },

    searchAllConversationGroups: async (req,res) => {
        try {
            const {name, address, school } = req.query;
            const user_id = req.body.decode.id;
            // console.log(name, address, school);
            if(!name || !user_id) return res.status(400).json('missing data');
            let result = await conversationService.searchAllConversationGroups(name,address,school);
            if(result == null) return res.status(404).json('not found');
            if(result.success) return res.status(200).json(result.success);
            throw new Error(result.error);
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error});
        }
    }
}

module.exports = conversationController;
