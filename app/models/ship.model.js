const mongoose = require("mongoose");

const Ship = mongoose.model(
  "Ship",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    length: {
      type: String,
      default: '0',
    },
    price: {
      type: Number,
      default: 0,
    },
    type:{
      type:String,
      default:''
    },
    shipYard: {
      type: String,
      default: "",
    },
    built: {
      type: String,
      default: '0',
    },
    trefit: {
      type: String,
      default: '0',
    },
    region:{
        type:String,
        default:''
    },
    cabin:{
        type:String,
        default:'0'
    },
    guest:{
        type:String,
        default:'0'
    },
    userId: { 
        type: mongoose.Schema.ObjectId, 
        ref: "User" 
    },
    images:[
      {
        type:String
      }
    ]

  })
);

module.exports = Ship;
