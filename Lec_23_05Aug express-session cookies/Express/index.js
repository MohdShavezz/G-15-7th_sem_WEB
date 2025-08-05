import dotenv from 'dotenv'
import express from 'express'
import { dbConn } from './config/dbConn.js'
import { errorMiddleware } from './middleware/error.js'
import router from './routers/auth.js'
import cookieParser from 'cookie-parser'

// const JWT_SECRET_KEY = 
const app = express()
dotenv.config()
app.use(express.json())
app.use(cookieParser())


app.use('/',router)
//ERROR custom middleware
app.use(errorMiddleware)
app.use(cookieParser())

app.listen(process.env.PORT, () => {
    dbConn()
    console.log('server is running on ', process.env.PORT)
})