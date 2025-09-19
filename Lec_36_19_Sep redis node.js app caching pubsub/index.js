import express from 'express'
import mongoose from 'mongoose'
import { createClient } from 'redis'

const app = express()

app.use(express.json())

//redis configuration
const redisClient=createClient()

redisClient.on('error',()=>{
    console.log('redis error in connecting..')
})
redisClient.on('ready',()=>{
    console.log('redis connecting..')    
})
redisClient.on('connect',()=>{
    console.log('redis connected sucessfully...')
})

await redisClient.connect()

mongoose.connect('mongodb://localhost:27017/redis_db').then(()=>{
    console.log('db connected...')
})

const prodSchema=new mongoose.Schema({
    name:{
        type : String, required:true
    },
    price:{
        type:Number,required:true
    }
},{timeseries:true})
const Product=mongoose.model('Product',prodSchema)


//create
app.post('/product',async(req,res)=>{
  const {name,price}=req.body;
  
  try {
    const product=await Product.create({name,price})
    await redisClient.del('products')
    res.status(201).json({message:"product created",data:product})
  } catch (error) {
    console.log(error)
  }
})
//get product
app.get('/product',async(req,res)=>{
  try {
    
    const cacheProds= await redisClient.get('products')
    if(cacheProds){
        res.status(200).json({data:JSON.parse(cacheProds)})
        console.log('from cache')
        return
    }
    const product=await Product.find()
    await redisClient.set('products',JSON.stringify(product),{EX:120})
    res.status(201).json({data:product})
    console.log('from db..')
  } catch (error) {
    console.log(error)
  }
})
//get product by id
app.get('/product/:id',async(req,res)=>{
  try {
    
    const cacheProd= await redisClient.get(`product:${req.params.id}`)
    if(cacheProd){
        res.status(200).json({data:JSON.parse(cacheProd)})
        console.log('from cache')
        return
    }
    const product=await Product.findById(req.params.id)
    await redisClient.set(`product:${req.params.id}`,JSON.stringify(product))
    res.status(201).json({data:product})
    console.log('from db..')
  } catch (error) {
    console.log(error)
  }
})
//update product
app.put('/product/:id',async(req,res)=>{

  try {
    let {name,price}=req.body;
    let obj={}
    if(name){
        obj.name=name
    }
    if(price){
        obj.price=price
    }
    const product=await Product.findByIdAndUpdate(req.params.id,obj,{new:true})
    await redisClient.del(`product:${req.params.id}`)
    res.status(200).json({data:product})
  } catch (error) {
    console.log(error)
  }
})
//delete product
app.delete('/product/:id',async(req,res)=>{
  try {
    const product=await Product.findByIdAndDelete(req.params.id)
    await redisClient.del(`product:${req.params.id}`)
    res.status(200).json({message:"product deleted"})
  } catch (error) {
    console.log(error)
  }
})

app.listen(3000,()=>{
    console.log('server irunning on 3000')
})