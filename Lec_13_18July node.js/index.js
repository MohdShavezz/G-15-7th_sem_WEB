// import { multi, sum } from "./utils/calculation";
// console.log(sum(1,2))
// console.log(multi(2,2))

//var fs=require('fs')

// import fs from 'fs';

// let data=fs.readFileSync('input.txt')  // blocking
// console.log(data.toString())
// for (let index = 0; index < 5; index++) {
//     console.log(index)    
// }

import fs from 'fs/promises' // var fs=require('fs').promises

// fs.readFile('input.txt').then(data=>console.log(data.toString())).catch(err=>console.log(err))
// for (let index = 0; index < 5; index++) {
//     console.log(index)    
// }

async function readFile(){
    try {
        let data= await fs.readFile('input.txt')
        console.log(data.toString())
    } catch (error) {
        console.log(error)
    }
}

// readFile()

async function writeFile(){
    try {
        await fs.writeFile('input.txt','fjads fdsflkjdsf ')
    } catch (error) {
        console.log(error)
    }
}

// writeFile()

async function appendFile(){
    try {
        await fs.appendFile('input.txt','\n appeded text')
    } catch (error) {
        console.log(error)
    }
}

// appendFile()


// import os from 'os'
// console.log(os.userInfo())
// console.log(os.totalmem())
// console.log(os.freemem())
// console.log(os.cpus())


//PATH
import path from 'path'
import url from 'url'
const filepath ='./dir/dir2/file.txt';
// console.log(path.basename(filepath))
// console.log(path.dirname(filepath))
// console.log(path.parse(filepath))
// console.log(path.extname(filepath))
const __filename=url.fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)
console.log(__filename)
console.log(__dirname)

const urlString = 'https://www.microsoft.com/handle?a=apple&b=ball'
const urlObj = new URL(urlString)
console.log(urlObj)
console.log(url.format(urlObj))
const params=new URLSearchParams(urlObj.search)
console.log(params)
params.append('u','user')
params.delete('u')
console.log(params)