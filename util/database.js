// const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const connection = mongoose.createConnection(
  "mongodb+srv://Bilel4388:Bac2023admis203647%40@db.aedauvk.mongodb.net/"
); 
mongoose.set('strictQuery', false);
// Connect to MongoDB using Mongoose
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));

module.exports = connection;
