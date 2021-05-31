const mongoose = require("mongoose");
const { Schema, model }=mongoose; 
const User = require("../models/User");


const taskSchema= new Schema({
   task: String,
   user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  
    },{timestamps: true,});

    
   

module.exports= Task= model("task", taskSchema);
