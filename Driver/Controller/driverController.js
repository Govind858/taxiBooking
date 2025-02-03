const express = require('express')
const {hashPassword,checkpassword, } = require('../Usecase/driverUseCase')
const {fetchallDrivers,deleteDrivers,findAvailableDrivers} = require('../Repo/driveRepo')

const driverRegistration =  async (req,res) => {
    try {
        let data = req.body
        let driver = await hashPassword(data)
        console.log(driver)
        res.json({
            success:true,
            message:"driver registration is successful",
            driver
        })
    } catch (error) {
        console.log(error)
    }
}

const driverLogin = async (req,res) => {
        try {
            let data = req.body
            // console.log(data,"in controller")
            let loginedData = await checkpassword(data)
            console.log(loginedData )
            res.json({
                success:true,
                message:"login successful",
                loginedData
            })
        } catch (error) {
            console.log(error)
        }
}

const viewallDrivers = async (req,res) => {
    try {
        let driverslist = await fetchallDrivers()
        res.json({
            success:true,
            message:"successfully listed all drivers list",
            driverslist
        })
    } catch (error) {
        console.log(error)
    }
}

const deleteallDrivers = async (req,res) => {
        await deleteallDrivers()
        res.json({
            success:true,
            message:'successfully deleted all drivers data',
        })
}
const viewAvailableDrivers = async (req,res) => {
    try {
       const availableDrivers = await findAvailableDrivers()
       res.json({
        success:true,
        message:"successfully fetch all available drivers",
        availableDrivers
       })
    } catch (error) {
       console.log(error) 
    }
}
const pickOneDriver = async (req,res)=>{
    try {
        let driver = await driverPick()
        console.log(driver,"driver..")
    } catch (error) {
        
    }
}
module.exports = {driverRegistration,driverLogin,viewallDrivers,deleteallDrivers,viewAvailableDrivers,pickOneDriver}