const express = require('express')
const {userController, signInController} = require('../controllers/auth_controllers');
const {body} = require('express-validator');
const isAuth = require('../middlewares/is_Auth')

const router = express.Router();


router.route('/user').post(userController);

router.route('/signin').post([
    body('email').trim().not().isEmpty(),
], signInController);




module.exports = router