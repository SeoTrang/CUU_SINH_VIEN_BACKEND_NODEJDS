const router = require('express').Router();

const authController = require('../controllers/authController');

// router.get('/')
router.post('/register',authController.register);
router.post('/login',authController.login);




module.exports = router;