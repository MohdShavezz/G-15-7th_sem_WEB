import mongoose from 'mongoose'

let userSchema = new mongoose.Schema({
    name: String, 
    email: String, 
    password: String,
    image:String
}, { timestamps: true })

export const User = mongoose.model("User", userSchema)