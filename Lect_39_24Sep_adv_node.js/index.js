const fs=require('fs')

// console.log('1')
// const data=fs.readFile('file.txt',(err,data)=>{
//     if(!err) console.log(data.toString())
// })
// console.log('2')

const readStream=fs.createReadStream('file.txt',{highWaterMark:20})
const writeStream=fs.createWriteStream('output.txt')

readStream.on('data',(chunk)=>{
    console.log(chunk)
    console.log(chunk.toString())
    writeStream.write(chunk)
})

readStream.on('end',()=>{
    console.log('completed')
    console.log(Buffer.from('hello'))
})