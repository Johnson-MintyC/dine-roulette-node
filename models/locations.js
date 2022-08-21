const mongoose = require("mongoose");

const locationSchema = mongoose.Schema({
  title: { type: String, required: true, unique: true },
  location: { type: String, required: true },
  geocode: { type: String, required: true },
  user_id: { type: String },
});

const Location = mongoose.model("Location", locationSchema);

module.exports = Location;
