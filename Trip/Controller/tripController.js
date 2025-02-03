const express = require('express')
const {newtrip,searchNowFn} = require('../Usecase/tripuseCase')
const {getuserById, getuserByIdfn} = require('../../Auth/Usecase/useruseCase')
const jwt = require("jsonwebtoken");
const { driverPick } = require('../../Driver/Usecase/driverUseCase');


const createTrip =  async (req,res) => {
   try {
    const data = req.body
    console.log(data)
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

const searchNow = async (req, res) => {
    try {
        let trip = req.body
        const token = req.headers["authorization"]?.split(" ")[1]; // Remove 'Bearer' prefix
        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }

        // Verify and decode the token securely
        const decoded = jwt.verify(token, "this_is_secretKey"); // Ensure the same secret key is used
        console.log("Decoded Payload:", decoded);
        // Extract user ID from the token
        const userId = decoded.id;
        console.log("User ID from token:", userId);
        let user = await getuserByIdfn(userId)
        let driver = await driverPick()
        let TripData = {
            trip:trip,
            user:user,
            driver:driver,
            TripStatus:"Not_started",
            AccepetedStatus:"Not_Accepted"
        }

        res.json({ TripData });
    } catch (error) {
        console.error("Error:", error);
        res.status(401).json({ message: "Invalid or expired token" });
    }
};;

module.exports = {createTrip,searchNow}