const addressService = require("../services/addressService");
const conversationService = require("../services/conversationService");
const friendService = require("../services/friendService");
const messageService = require("../services/messageService");
const postService = require("../services/postService");
const userService = require("../services/userService");

const commonController = {
    getAllData: async (req,res) => {
        try {
            let data = {
                users: null,
                posts: null,
                profile: null,
                conversations: null,
                address: null,
                list_friends: [],
                friends_sent_request: [],
                friends_received_request: [],

            };
            // user
            const users = await userService.getAllUsers();
            // console.log("users", users);
            if(users.success){
                data.users = users.success
            }

            // post
            let user_id = req.body.decode.id;
            const posts = await postService.getFeed(user_id);
            data.posts = posts || [];

            // profile
            const profile = await userService.findById(user_id);
            data.profile = profile;

            // conversation
            // const conversations = await conversationService.getAllConversationFromUser(user_id);
            let result = await conversationService.getAllConversationFromUser(user_id);
            // console.log("result ============================: ");
            // console.log(result);
            let dataConversation = null;
            if(result != null) dataConversation = result.success;
            if(dataConversation && dataConversation.length > 0){
                for (let index = 0; index < dataConversation.length; index++) {
               
                    
                    let listUser = await conversationService.getUserFromConversationID(dataConversation[index].conversation_id);
                    

                    let latestMessage = await messageService.getLatestMessageByConversationId(dataConversation[index].conversation_id);

                    dataConversation[index] = {
                        ...dataConversation[index],
                        users: listUser.users, // Flatten the structure and move "users" directly under each conversation object
                        latestMessage: latestMessage
                    };

                
            }
            }
            // let latestMessage = await messageService.getLatestMessageByConversationId(data[index].conversation_id);
            data.conversations = dataConversation;


            // address
            const address = await addressService.getAll();
            data.address = address.success;

            // list friends
            const friendsId = await friendService.getAllFriendId(user_id);
            if(friendsId.success != null) {
                for (let index = 0; index < friendsId.success.length; index++) {
                    const friend = await userService.findById(friendsId.success[index]);
                    data.list_friends = [...data.list_friends,friend]
                }
            }
            

            // get friends sent request
            const friends_sent_request = await friendService.getSentRequests(user_id);
            data.friends_sent_request = friends_sent_request.success;

            // get friends recevied request
            const friends_received_request = await friendService.getReceivedRequests(user_id);
            data.friends_received_request = friends_received_request.success;

            return res.status(200).json(data);
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error});
        }
    }
}

module.exports = commonController;