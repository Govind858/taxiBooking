const express = require('express')
const {addtoDb,updataStatus} = require('../Repo/tripRepo')
 module.exports.newtrip = async (data) => {
       try {
           const kmRate = 20
           let {km} = data
           var tripRate = km*kmRate
           data.tripRate = tripRate
           console.log(data,"in user")
            return (data)
       } catch (error) {
            console.log(error)
       }
       
}
module.exports.searchNowFn = async(data,req)=>{
    try {
        console.log(data,"--data from saerchnow fn")
        const token = data.headers["authorization"]?.split(" ")[1]; // Remove 'Bearer' prefix
        
    } catch (error) {
        console.log(error)  
    }
}

module.exports.tripAcceptedStatus = async (data) => {
    try {
        data.AccepetedStatus = 'Accepted'
        console.log(data)
        await addtoDb(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

module.exports.tripStatus = async (data) => {
    try {
       console.log(data,"=========")
       let updatedData =  await updataStatus(data)
       return updatedData
    } catch (error) {
        
    }
}