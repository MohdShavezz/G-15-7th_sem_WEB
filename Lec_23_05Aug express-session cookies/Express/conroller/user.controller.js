import { User } from "../models/User.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export const loginController= async (req, res, next) => {
    try {
        const { email, password } = req.body
        let user = await User.findOne({ email })
        if (!user) {
            let err = new Error('User dont exist')
            err.statusCode = 404
            return next(err)
        }
        let passCheck = await bcrypt.compare(password, user.password)
        if (!passCheck) {
            let err = new Error('Passwrod dont match')
            err.statusCode = 401
            return next(err)
        }
        let token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' })
        
        res
        .cookie('token', token, { maxAge: 900000, httpOnly: true })
        .status(200).json({ success: true, user })

    } catch (error) {
        console.log(error)
    }
}

export const createController=async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        console.log(name, email, password)
        const image=req.file?.filename||null
        console.log(req.file.filename)
        if (!name || !email || !password) {
            let err = new Error('Fields are required')
            err.statusCode = 501
            return next(err)
        }
        let hashPass = await bcrypt.hash(password, 10)
        let user = { name, email, password: hashPass ,image}
        await User.create(user)
        let {password:pss,...witoutPassword}=user
        res.status(201).json({ success: true, message: "user created",data:witoutPassword })
    } catch (error) {
        console.log(error)
    }
}

export const updateController= async (req, res, next) => {
    try {
        const { name, email } = req.body;
        const userId=req.params.id
        const image=req.file?.filename||null

        let user={}
        if(name){
            user.name=name
        }
        if(email){
            user.email=email
        }
        if(image){
            user.image=image
        }
        let updated= await User.findByIdAndUpdate(userId,user,{new:true})
        console.log(updated)
        
        res.status(200).json({ success: true, message: "user updated",data:updated })
    } catch (error) {
        console.log(error)
    }
}

export const deleteController=async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(201).json({ success: true, message: "user deleted" })
    } catch (error) {
        console.log(error)

    }
}