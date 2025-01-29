const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {createDrive,findDriver} = require('../Repo/driveRepo')

module.exports.hashPassword =  async (data) =>{
      try {
        let {password} = data
        let saltRound = 10
        let hash = await bcrypt.hash(password ,saltRound) 
        data.password = hash
        await createDrive(data)
        return data
      } catch (error) {
        console.log(error)
      }
}

module.exports.checkpassword = async (data) => {
        // console.log(data,'in usecase')
        let driver = await findDriver(data)
        let {password} = data
        const isMatch =  await bcrypt.compare(password,driver.password)
        if(!isMatch){
          console.log('drive not registered or invalid password')
        }
        const token = jwt.sign({id: driver._id},"this_is_secret_key",{expiresIn:"1h"})

        let {name} = driver
        let {mobile} = driver

         let driverData = {
            name,
            mobile,
            token
      }
        return(driverData)
}


  