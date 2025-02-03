const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {createDrive,findDriver, getDriver} = require('../Repo/driveRepo')

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
module.exports.driverPick = async ()=>{
  try {
        let driver = await getDriver()
        if (Array.isArray(driver) && driver.length > 0) {
          let randomDriver = driver[Math.floor(Math.random() * driver.length)];
          return randomDriver;
          } else {
              throw new Error("Driver list is empty or invalid");
          }      
        return driver
  } catch (error) {
        console.log(error)
  }
}


  