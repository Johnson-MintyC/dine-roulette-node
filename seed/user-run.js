require("dotenv").config();

const path = require("path");
const mongoose = require("mongoose");

const Users = require(path.join(__dirname, "../models/users"));
const dummyData = require("./user-seed-data.json");

const dbURL = process.env.MONGODB_URL;

mongoose.connect(dbURL, async () => {
  console.log("Connected to db");

  //   console.log("Resetting collection");
  //   //   await Users.collection.drop();
  //   console.log("collection dropped");

  console.log("Inserting seed data");
  const testdata = await Users.insertMany(dummyData);
  console.log("Dummy info inserted");
  console.log(testdata);

  mongoose.connection.close();
});

// [
//   {
//     username: 'testuser1',
//     password: 'password1',
//     _id: new ObjectId("63005887537cfde605bd6c17"),
//     __v: 0
//   },
//   {
//     username: 'testuser2',
//     password: 'password2',
//     _id: new ObjectId("63005887537cfde605bd6c18"),
//     __v: 0
//   },
//   {
//     username: 'testuser3',
//     password: 'password3',
//     _id: new ObjectId("63005887537cfde605bd6c19"),
//     __v: 0
//   }
// ]
