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


// conversation
router.get('/conversation/get-all-conversation',checkLogin,conversationController.getAllConversationsGroup);

router.put('/conversation/accept/:conversation_id',conversationController.acceptStatus);

// school
router.get('/school/get-all-schools',schoolController.getAllSchools)
router.put('/school/accept/:school_id',schoolController.acceptStatus);
router.get('/school/get-by-address',schoolController.getByAddress);


// faculty
router.get('/faculty/get-all-faculty',facultyController.getAllFaculty);
router.put('/faculty/accept/:faculty_id',facultyController.acceptStatus);


// profile
router.get('/profile',checkLogin,userController.getProfile);
module.exports = router;