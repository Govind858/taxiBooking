const express = require('express')
const router = express.Router()
const {driverRegistration, driverLogin,viewallDrivers,deleteallDrivers} = require('../Controller/driverController')

router.route('/driverRegistration').post(driverRegistration)
router.route('/driverLogin').post(driverLogin)
router.route('/viewallDrivers').get(viewallDrivers)
router.route('/deleteallDrivers').get(deleteallDrivers)


module.exports = router