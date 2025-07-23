import fs, { createWriteStream } from 'fs'
import zlib from 'zlib'

let readStream =fs.createReadStream('index.js')
let writeStream =fs.createWriteStream('write.js')

readStream.on('data',(chunk)=>{
    // console.log(chunk.toString())
    writeStream.write(chunk) // copy data from index.js to write.js (new file creates)
})

//zip and unzip

// fs.createReadStream('index.js').pipe(zlib.createGzip()).pipe(fs.createWriteStream('index.js.gz'))
fs.createReadStream('index.js.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('decompress.js'))



