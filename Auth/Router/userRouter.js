const express = require('express')
const {userRegistration,userLogin,viewallUsers,deleteallUsers} = require('../controller/userController')
const router = express.Router();


router.route('/userRegistration').post(userRegistration)
router.route('/userLogin').post(userLogin)
router.route('/viewallUsers').get(viewallUsers)
router.route('/deleteallUsers').get(deleteallUsers)

module.exports = router;