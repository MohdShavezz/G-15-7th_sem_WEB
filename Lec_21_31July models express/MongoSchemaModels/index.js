//MONGOOSE MODELS
// import mongoose from "mongoose";
const mongoose=require('mongoose')

const userSchema = new mongoose.Schema({
 name:{
    type:String,
    require:[true,"name is required"],
    min:5,
    max:30,
    select:true
 },
 status:{
    type:String,
    enum:['pending','process','end'],
    default:'pending'
 },
 age:Number,
 hobbies:[String],
 address:{
    street:String,
    zipcode:Number
 },
 phone:{
    type:String,
    validate:{
        validator:function(v){
            return '/regex/'.test(v)
        },
        message:(msg)=> `${msg.message} phone is invalid`
    }
 }
},{timestamps:true})

const productSchema = new mongoose.Schema({
 name:{
    type:String,
    require:[true,"name is required"],
    min:5,
    max:30,
    select:true
 },
 price:Number,
 description:String 

},{timestamps:true})

const orderSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    },
    qty:Number
},{timestamps:true})



module.exports={
    User:mongoose.model("User",userSchema),
    Product:mongoose.model("Product",productSchema),
    Order:mongoose.model("Order",orderSchema),
}