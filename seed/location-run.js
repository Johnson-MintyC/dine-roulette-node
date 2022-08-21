require("dotenv").config();

const path = require("path");
const mongoose = require("mongoose");

const Users = require(path.join(__dirname, "../models/locations"));
const dummyData = require("./seed-locations.json");

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
//     {
//       title: 'ramen san',
//       location: '200 Bourke St, Melbourne VIC',
//       geocode: '144.9676161,-37.8126627',
//       user_id: '63005887537cfde605bd6c17',
//       _id: new ObjectId("630182ee16bd1236b9b99afe"),
//       __v: 0
//     },
//     {
//       title: 'garden state',
//       location: '101 Flinders Lane, Melbourne VIC',
//       geocode: '144.971045,-37.8153755',
//       _id: new ObjectId("630182ee16bd1236b9b99aff"),
//       __v: 0
//     },
//     {
//       title: 'qv market',
//       location: 'Queen St, Melbourne VIC',
//       geocode: '144.9617719,-37.817466',
//       user_id: '63005887537cfde605bd6c17',
//       _id: new ObjectId("630182ee16bd1236b9b99b00"),
//       __v: 0
//     }
//   ]
