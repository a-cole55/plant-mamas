const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  nickname: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: false,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  datePurchased: {
    type: String,
    required: false,
  },
  lightConditions: {
    type: String,
    required: true,
  },
  temperature: {
    type: String,
    required: true,
  },
  water: {
    type: String,
    required: true,
  },
  dateWatered: {
    type: String,
    required: false,
  },
  dateFertilized: {
    type: String,
    required: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
