import express from 'express'
import User from '../models/User.js'
const router=express.Router()

//get users
router.get('/', async(req,res)=>{
  try {
    const users=await User.find()
    res.json(users)
  } catch (error) {
    console.log('error in get users',error)
  }
})

//create user
router.post('/', async(req,res)=>{
  try {
    const user=await User.create(req.body)
    res.status(201).json(user)
  } catch (error) {
    console.log('error in get users',error)
  }
})

//update
router.put('/:id', async(req,res)=>{
  try {
    const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.json(user)
  } catch (error) {
    console.log('error in get users',error)
  }
})

//delete
router.delete('/:id', async(req,res)=>{
  try {
    const user=await User.findByIdAndDelete(req.params.id)
    res.json('user deleted!')
  } catch (error) {
    console.log('error in get users',error)
  }
})


export default router;