const express = require('express')

module.exports.newtrip = async (data) => {
       try {
           const kmRate = 20
           let {km} = data
           var tripRate = km*kmRate
           data.tripRate = tripRate
           console.log(data,"in user")
            return (data)
        // const accepted = 
        //     if(accepted){
        //         await Savetrip()
        //     }

       } catch (error) {
            console.log(error)
       }
       
}
module.exports.searchNowFn = async(data)=>{
    try {
        console.log(data,"--data from saerchnow fn")
    } catch (error) {
        console.log(error)  
    }
}