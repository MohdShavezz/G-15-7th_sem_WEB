import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import path from 'path'
import router from './backend/routes/userRoute.js'

dotenv.config()
const app=express()
app.use(express.json())
app.use(cors())


app.use('/api/users',router)

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'frontend', 'dist')));
app.get(/.*/, (req, res) =>{
     res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'))
});

const PORT=process.env.PORT||5001
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(PORT,()=>console.log('server is running on ',PORT))
}).catch(err=>console.log(err))