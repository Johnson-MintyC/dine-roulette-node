//////////////////////////////
//  Dependencies
/////////////////////////////

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const mongoDBSession = require("connect-mongodb-session");

const app = express();
const PORT = process.env.PORT;
const dbURL = process.env.MONGODB_URL;

///////////////////////////////
//  DB & Listener
///////////////////////////////
mongoose.connect(dbURL, () => {
  console.log("Connected to roulette db");
});

app.listen(PORT, () => {
  console.log("Listening on", PORT);
});
