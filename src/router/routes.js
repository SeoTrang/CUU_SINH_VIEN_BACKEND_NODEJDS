const router = require('express').Router();

const addressController = require('../controllers/addressController');
const commentController = require('../controllers/commentController');
const conversationController = require('../controllers/conversationController');
const messageController = require('../controllers/messageController');
const postController = require('../controllers/postController');
const schoolController = require('../controllers/schoolController');
const userController = require('../controllers/userController');
const { checkLogin } = require('../middlewares/middleware');

// router.get('/')
// --------------------------------address
router.get('/all-address',addressController.getAll);


// ---------------------------------school
router.get('/school/all-school',schoolController.getByAddress)
router.get('/school/all-school-by-name',schoolController.getByAddressName)
router.post('/school',schoolController.create)



// search
router.get('/search/:search',userController.search)

// --------------------------------friend
//get all friends
router.get('/friend/get-all',checkLogin,userController.getAllFriends);
// Get the list of friends you sent the request to
router.get('/friend/get-sent-request',checkLogin,userController.getSentRequests);

// Get a list of friends who have sent you requests
router.get('/friend/get-received-request',checkLogin, userController.getReceivedRequests);


// -----------------------------------profile
router.get('/profile',checkLogin,userController.getProfile);



// ----------------------------------- conversation
router.post('/conversation/private-chat',checkLogin,conversationController.createPrivateConversation);

// group chat
router.post('/conversation/group-chat',checkLogin,conversationController.createGroupConversation);

// get from user id
router.get('/conversation/private-chat-from-user/:user_id',checkLogin,conversationController.getPrivateConversationFromUser);

// get list user from conversation_id
router.get('/conversation/get-user/:conversation_id',conversationController.getUserFromConversationID);

// get all conversation from user
router.get('/conversation/get-all-conversation',checkLogin,conversationController.getAllConversationFromUser);
// get all conversation group from user
router.get('/conversation/get-all-conversation-group',checkLogin,conversationController.getAllConversationGroupsByUser);

// search all conversation 
router.get('/conversation/search-all-conversation',checkLogin,conversationController.searchAllConversation);
// search all conversation groups
router.get('/conversation/search-all-conversation-group',checkLogin,conversationController.searchAllConversationGroups);

// search conversation group



// ---------------------------------------------------messages
router.post('/message/create',checkLogin,messageController.create);
router.get('/message/get-messages/:conversation_id',checkLogin,messageController.getMessageFromConversation);
router.get('/message/get-messages-reverse/:conversation_id',checkLogin,messageController.getMessageReverseFromConversation);




// -----------------------------------------post -----------------------------------
router.post('/post/create',checkLogin,postController.create);
router.delete('/post/:id',postController.delete);

// get the list of latest post
router.get('/post/feed', checkLogin, postController.getFeed);
// ve viet route nay vao swagger
router.get('/post/get-post/:post_id', checkLogin, postController.getPost);
router.get('/post/reacion-by-post/:post_id', checkLogin, postController.getReactionByPost);
router.post('/post/reaction', checkLogin, postController.reactionPost);
router.delete('/post/delete-reaction/:post_id', checkLogin, postController.reactionDelete);

// ----------------------------------------comment --------------------------------
router.post('/comment/create',checkLogin,commentController.create);
router.get('/comment/get-by-post/:post_id',checkLogin,commentController.getByPost);


// --------------------------------------- user ----------------------------
router.get('/user/all-users',checkLogin,userController.getAllUsers)



module.exports = router;