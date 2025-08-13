
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const express = require('express');
const multer = require('multer');
const cloudinary = require('./cloudinary.js')
 
const app = express();
 
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'my_ejs_files',
    allowed_formats:['jpg,jpeg,png']
  },
});
 
const upload = multer({ storage: storage });
module.exports=upload;