const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const jwtSecret = "SheIsJustAGirlWhoClaimsThatIAmTheOneButTheKidIsNotMySon"

const User = require("../models/User");

router.get("/restaurants", async (req, res) => {
    try {
      //database theke data fetch kortesi
      const fetched_data = await mongoose.connection.db.collection("restaurants");
      const restaurants = await fetched_data.find({}).toArray();
  
      //backend theke frontend e data pathaitesi
      res.send(restaurants);
    } catch (error) {
      console.log(error); 
      return res.json({ success: false });
    }
  });

  router.get("/user/:userId", async (req, res) => {
    const userId = req.params.userId;
    try {
      //database theke data fetch kortesi
      const user = await User.findById(userId);
  
      //backend theke frontend e data pathaitesi
      res.send(user);
    } catch (error) {
      console.log(error);
      return res.json({ success: false });
    }
  });

module.exports = router; 
