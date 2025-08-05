import express from 'express'
import { createController, deleteController, loginController, updateController } from '../conroller/user.controller.js'
import { authMiddleware } from '../middleware/auth.js'
import { upload } from '../middleware/upload.js'

const router = express.Router()

router.delete('/delete/:id',authMiddleware, deleteController)

router.post('/login',loginController)

router.post('/create',upload.single('image'), createController)

router.post('/update/:id',upload.single('image'),updateController)

export default router;