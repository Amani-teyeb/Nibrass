const mongoose = require("mongoose");
const { Schema, model }=mongoose;


const courseSchema = new Schema({

    url :{type: String},
    titre:{type:String},
    level:{type:String},
    theme:{type:String},
    image:{type:String},
    description:{type:String},
    favorite: {type:Boolean},
    },{timestamps: true,});

module.exports= Course= model("course", courseSchema);
