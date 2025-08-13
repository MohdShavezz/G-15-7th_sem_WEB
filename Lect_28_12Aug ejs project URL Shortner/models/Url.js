const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    originalUrl:String,
    shortUrl:String,
    pictureUrl:String,
    publicId:String,
    visitCount:{
        type:Number,default:0
    }
},{timestamps:true})

module.exports=mongoose.model('Url',urlSchema)