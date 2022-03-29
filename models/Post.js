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
    type: Number,
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
    type: Number,
    required: false,
  },
  dateFertilized: {
    type: Number,
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
