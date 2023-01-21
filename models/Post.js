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
    requireds: true,
  },
  cloudinaryId: {
    type: String,
    required: false,
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
    required: false,
  },
  water: {
    type: String,
    required: true,
  },
  dateWatered: {
    type: String,
    required: true,
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
