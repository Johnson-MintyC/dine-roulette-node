const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  title: { type: String, required: true, unique: true },
  location: { type: String, required: true },
  geocode: { type: String, required: true },
  user_id: { type: String, required: true },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
