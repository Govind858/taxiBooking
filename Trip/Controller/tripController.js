const express = require('express')
const {newtrip} = require('../Usecase/tripuseCase')


const createTrip =  async (req,res) => {
   try {
    const data = req.body
    trip =  await newtrip(data)
    res.json({
        success:true,
        message:"succesfully created  trip",
        trip
    })
   } catch (error) {
    console.log(error)
   }
}

module.exports = {createTrip}