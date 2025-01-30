const express = require('express')
const {newtrip,searchNowFn} = require('../Usecase/tripuseCase')
const jwt = require("jsonwebtoken");


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
        const token = req.headers["authorization"]?.split(" ")[1]; // Remove 'Bearer' prefix
        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }

        // Decode without verifying (unsafe)
        const decoded = jwt.decode(token);
        console.log("Decoded Payload:", decoded);

        res.json({ payload: decoded });

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = {createTrip,searchNow}