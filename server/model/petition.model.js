const mongoose = require("mongoose");

const petitionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    goal: {
      type: String,
      required: true,
    },
    signedBy: {
      type: [String],   
      default: []
    },
    signatures: {
      type: Number,
      default: 0,
    },
    userID: { 
      type: String 
    },
    name: {
      type: String
    }
  },
  { versionKey: false }
);

const petitionModel = new mongoose.model("petition", petitionSchema);
module.exports = { petitionModel };
