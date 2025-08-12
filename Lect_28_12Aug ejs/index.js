const express = require('express')
const dotenv=require('dotenv')
const upload = require('./multer')
const Url = require('./models/Url')
const bodyParser = require('body-parser')
const { default: mongoose } = require('mongoose')
const { nanoid } = require('nanoid')
const cloudinary = require('./cloudinary.js')

dotenv.config()

mongoose.connect('mongodb://127.0.0.1:27017/urlShortener');

const PORT=process.env.PORT
const app=express()
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static('public'))

app.get('/',async(req,res)=>{
    const urls=await Url.find().lean()
    res.render('index',{urls,req})
})

app.post('/shorturl',upload.single('picture'),async (req,res)=>{
    const {originalUrl}=req.body
    let pictureUrl=null
    let publicId=null
    if(req.file){
        pictureUrl=req.file.path
        publicId=req.file.filename
    }

    const url = await Url.findOne({originalUrl})
    if(url){
        res.send('already exist!')
    }
    const shortUrl=nanoid(6)

    await Url.create({
        originalUrl,publicId,pictureUrl,shortUrl
    })
    res.redirect('/')

})

app.get('/:shortUrl',async(req,res)=>{
    const {shortUrl}=req.params
    const url=await Url.findOne({shortUrl})
    if(!url){
        res.send('short url not found!')
    }
    url.visitCount++
    await url.save()
    res.redirect(url.originalUrl)
})

//deletion
app.post('/:id',async (req,res)=>{
    try {
        const url = await Url.findById(req.params.id)
    if(url.publicId){
        await cloudinary.uploader.destroy(url.publicId)
    }
    await Url.findByIdAndDelete(req.params.id)
    res.redirect('/')
    } catch (error) {
        console.log('error in deleteion',error)
    }
})



app.listen(PORT, ()=>{
    console.log('server is running on ',PORT)
})