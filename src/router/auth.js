const router = require('express').Router();

const authController = require('../controllers/authController');

// router.get('/')
router.post('/register',authController.register);
router.post('/login',authController.login);
router.post('/admin/login',authController.login);
router.post('/forgot-password',authController.forgotPassword);


//verify email
router.post('/send-email',authController.sendEmail)
router.post('/verify-email',authController.verifyEmail);

module.exports = router;