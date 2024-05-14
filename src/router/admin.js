const router = require('express').Router();

const addressController = require('../controllers/addressController');
const autController = require('../controllers/authController');
const commentController = require('../controllers/commentController');
const commonController = require('../controllers/commonController');
const conversationController = require('../controllers/conversationController');
const facultyController = require('../controllers/facultyController');
const messageController = require('../controllers/messageController');
const Notificationcontroller = require('../controllers/notificationController');
const postController = require('../controllers/postController');
const schoolController = require('../controllers/schoolController');
const userController = require('../controllers/userController');
const { checkLogin } = require('../middlewares/middleware');

router.get('/user/all-users',userController.getAllUsersDetail)
router.get('/conversation/get-all-conversation',checkLogin,conversationController.getAllConversations);

module.exports = router;