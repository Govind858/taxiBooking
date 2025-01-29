const express = require('express')
const driverModel = require('../Model/dirverModel')

module.exports.createDrive = async (data) => {
    try {
        await driverModel.create(data)
        return true
    } catch (error) {
        console.log
    }
}
 
module.exports.findDriver = async (data) => {
    try {
        let {mobile} = data
     return  await driverModel.findOne({mobile:mobile}) 

    } catch (error) {
        console.log(error)
    }
}

module.exports.fetchallDrivers = async () => {
    try {
        let allDrivers = await driverModel.find({})
        return allDrivers
    } catch (error) {
        console.log(error)
    }
}

module.exports.deleteDrivers = async () => {
    return await driverModel.deleteMany({})
}