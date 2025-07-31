import express from 'express'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

// const JWT_SECRET_KEY = 
const app = express()
dotenv.config()
app.use(express.json())

const dbConn = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/g15db')
        console.log('db connected')
    } catch (error) {
        console.log(error)
    }
}

//CREATE USER COLLECTION MODEL
let userSchema = new mongoose.Schema({
    name: String, email: String, password: String
}, { timestamps: true })
const User = mongoose.model("User", userSchema)


//AUTH middleware
let authMiddleware = (req, res, next) => {
    let token;
    if (req.headers.authorization?.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1] 
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
            if (!decoded) {
                let err = new Error('invalid token')
                err.statusCode = 401
                next(err)
                return
            }
            req.id=decoded.id
            return next()
        } catch (error) {
            console.log(error)
        }
    }
    return next(new Error('Invalid user'))
}

app.delete('/delete/:id',authMiddleware, async (req, res) => {
    try {
        console.log(req.params.id)
        await User.findByIdAndDelete(req.params.id)

        res.status(201).json({ success: true, message: "user deleted" })

    } catch (error) {
        console.log(error)

    }
})

app.post('/login', async (req, res, next) => {
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
        res.status(200).json({ success: true, user, token })

    } catch (error) {
        console.log(error)
    }
})

app.post('/create', async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        console.log(name, email, password)
        if (!name || !email || !password) {
            let err = new Error('Fields are required')
            err.statusCode = 501
            return next(err)
        }
        let hashPass = await bcrypt.hash(password, 10)
        let user = { name, email, password: hashPass }
        await User.create(user)
        let {password:pss,...witoutPassword}=user
        res.status(201).json({ success: true, message: "user created",data:witoutPassword })
    } catch (error) {
        console.log(error)
    }
})

app.get('/', (req, res) => {
    res.status(200).json({ message: 'HomeROUTE' })
})

//ERROR custom middleware
app.use((err, req, res, next) => {
    // console.log(err.stack)
    let statusCode = res.res.statusCode || 500
    res.status(statusCode).json({ message: err.message || 'internal server errror' })
})

app.listen(process.env.PORT, () => {
    dbConn()
    console.log('server is running on ', process.env.PORT)
})