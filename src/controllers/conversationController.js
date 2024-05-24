const addressService = require('../services/addressService');
const conversationService = require('../services/conversationService');
const facultyService = require('../services/facultyService');
const messageService = require('../services/messageService');
const schoolService = require('../services/schoolService');
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
            await userConversationService.create({user_id: user1_id,conversation_id: conversation_id.success})
            // insert user 2 to conversation
            await userConversationService.create({user_id: user2_id,conversation_id: conversation_id.success})

            return res.status(200).json(conversation_id.success);


        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error});
        }
    },

    createGroupConversationSchoolFaculty: async (req,res) => {
        try {
            const {address ,school, faculty, group} = req.body.data;

            let address_id = null;
            let school_id = null;
            let faculty_id = null;
            // handle school
            const addressExist = await addressService.getByName(address);
            
            // return res.status(200).json(addressExist);
            address_id = addressExist.id;
            // check school exist
            const schoolExist = await schoolService.getByName(school);
            if(schoolExist) school_id = schoolExist.id;

            // if school not exist
            else{
                const dataSave = {
                    name: school,
                    status: 'pending',
                    address_id: address_id
                }
                const school_save = await schoolService.create(dataSave);
                school_id = school_save.success.id;
            }

            
            // handle faculty
            // check_faculty
            const facultyExist = await facultyService.getByName(faculty,school_id);
            if(facultyExist) faculty_id = facultyExist.id;

            // if faculty not exist
            else{
                const dataSave = {
                    name: faculty,
                    status: 'pending',
                    school_id: school_id
                }
                const faculty_save = await facultyService.create(dataSave);
                faculty_id = faculty_save.id;
            }


            if(!address_id || !school_id || !faculty_id || !group) return res.status(400).json('address_id || school_id || faculty_id || group_id => is null')

            // handle create group
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
                faculty_id: faculty_id,
                name: group,
                avatar: randomAvatar
            }
            const conversation_id = await conversationService.createGroup(dataConversation);
            
            // insert user admin to conversation
            const userAdminData = {
                user_id: req.body.decode.id,
                conversation_id: conversation_id.success,
                is_admin: true
            }
            await userConversationService.createV2(userAdminData);

            return res.status(200).json('success');
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error.message})
        }
    },

    deletePrivateConversation: async (req,res) => {
        try {
            const conversation_id = req.params.conversation_id;
            if(!conversation_id) return res.status(400).json('missing conversation_id');
            const result = await conversationService.deletePrivateChat(conversation_id);
            if(result == true) return res.status(200).json('success');
        } catch (error) {
            console.log(error);
            return res.status(500).json('server error: '+error.message)
        }
    },

    // insert conversation chat room
    createGroupConversation: async (req,res) => {
        try {
            const school_id = req.body.data.school_id;
            const address_id = req.body.data.address_id;
            const faculty_id = req.body.data.faculty_id;
            const name = req.body.data.name;
            const creater_id = req.body.decode.id;

            const listAvatar = [
                '/img/avatar_default/ava_d_g1.png',
                '/img/avatar_default/ava_d_g2.png',
                '/img/avatar_default/ava_d_g3.png',
                '/img/avatar_default/ava_d_g4.png',
                '/img/avatar_default/ava_d_g5.png',
                '/img/avatar_default/ava_d_g6.png',
            ]
            // Generate a random index within the range of the array length
            const randomIndex = Math.floor(Math.random() * listAvatar.length);

            // Get the random avatar URL using the random index
            const randomAvatar = listAvatar[randomIndex];

            const dataConversation = {
                school_id: school_id,
                address_id: address_id,
                faculty_id: faculty_id,
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
            // console.log(req.params.user_id);
            // console.log(req.body.decode);
            const user_id_1 = req.body.decode.id;
            const user_id_2 = req.params.user_id;
            if(!user_id_1 || !user_id_2) return res.status(400).json('missing data');
            let conversation_id = await conversationService.getPrivateConversationFromUser(user_id_1,user_id_2);


        
            if(conversation_id){
                // console.log(conversation_id.success[0].conversation_id);
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
            if(result) return res.status(200).json(result);
            return res.status(404).json('not found');
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error});
        }
    },

    getUserPendingFromConversationID: async(req,res)=> {
        try {
            const conversation_id = req.params.conversation_id;
            if(!conversation_id) return res.status(400).json('missing data');
            const result = await conversationService.getUserPendingFromConversationID(conversation_id);
            if(result) return res.status(200).json(result);
            return res.status(404).json('not found');
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

    getAllConversationsGroup: async (req,res) => {
        try {
            let result = await conversationService.getAllConversationsGroup();
            console.log(result);
        
            let data = result;
            
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
            // console.log(result);
            let data = result.success;
            if(data.length > 0){
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
            const {name, address, school, faculty } = req.query;
            console.log(name, address, school);
            let result = await conversationService.searchAllConversationGroups2(name,address,school,faculty);
            if(result == null) return res.status(404).json('not found');
            if(result.success) return res.status(200).json(result.success);
            throw new Error(result.error);
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error});
        }
    },

    requestJoinGroup: async (req,res) => {
        try {
            const group_id = req.params.group_id;
            const user_id = req.body.decode.id;
            if(!group_id || !user_id) return res.status(400).json('missing group_id or user_id')
            const checkIsExist = await userConversationService.checkUserExist(group_id, user_id);
            if(checkIsExist) return res.status(409).json('duplicate');
            const userData = {
                user_id: user_id,
                conversation_id: group_id,
                is_admin: false,
                status: 'pending'
            }
            const result = await userConversationService.create(userData);
            if(result.success) return res.status(200).json('request has been sent')
            throw new Error(result.error)

        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error.message})
        }
    },

    acceptRequestJoinGroup: async (req,res) => {
        try {
            const group_id = req.body.data.group_id;
            
            const user_request_join_id = req.body.data.user_id;
            const user_id = req.body.decode.id;
            if(!group_id || !user_request_join_id) return res.status(400).json('missing group_id')
            const data = {
                userData : {
                    user_id: user_request_join_id,
                    conversation_id: group_id,
                    is_admin: false,
                    status: 'accept'
                },
                userAccept_id: user_id
            }
            const result = await userConversationService.update(data);
            if(result.success) return res.status(200).json('successfully')
            throw new Error(result.error)

        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error.message})
        }
    },

    acceptStatus: async (req,res) => {
        try {
            const conversation_id = req.params.conversation_id;
            const result = await conversationService.acceptStatus(conversation_id);
            if(result) return res.status(200).json('success');
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error.message});
        }
    },

    deleteUserOutGroup: async(req,res) => {
        try {
            const user_id = req.query.user_id;
            const conversation_id = req.query.conversation_id;
            if(!user_id || !conversation_id) return res.status(400).json('missing user_id or conversation_id');
            const result  = await userConversationService.delete(user_id, conversation_id);
            if(result) return res.status(200).json('success');
        } catch (error) {
            console.log(error);
            return res.status(500).json({'error : ':error.message})
        }
    }
}

module.exports = conversationController;
