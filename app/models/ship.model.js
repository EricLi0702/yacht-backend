const mongoose = require("mongoose");

const Ship = mongoose.model(
  "Ship",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    length: {
      type: Number,
      default: 0,
    },
    rate: {
      type: Number,
      default: 0,
    },
    shipYard: {
      type: String,
      default: "",
    },
    built: {
      type: Number,
      default: 0,
    },
    trefit: {
      type: Number,
      default: 0,
    },
    userId: { 
        type: mongoose.Schema.ObjectId, 
        ref: "User" 
    },
  })
);

module.exports = Ship;
