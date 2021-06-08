// mongoose create the models
const mongoose = require("mongoose");
const { Schema, model }=mongoose; 

const userSchema= new Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    phone: Number,
    role: {
      type: String,
      enum: ["student", "admin", "teacher"],
      default: "student",
    },
    image:{type:String},
    favorites:{ type: Array, default: [] },
    

    },{timestamps: true,});
    
   

module.exports= User= model("user", userSchema);

  