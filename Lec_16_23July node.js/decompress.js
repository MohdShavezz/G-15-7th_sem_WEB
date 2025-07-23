import http from 'http'
import ejs from 'ejs'
import path from 'path'
import fs from 'fs'
const PORT = process.env.PORT

let products=[
{id:1,name:"product1",qty:10},
{id:2,name:"product2",qty:20},
{id:3,name:"product3",qty:30},
]

async function getProducts(req,res){
    const filePath=path.join(path.resolve(),'views','products.ejs')
    const html=await ejs.renderFile(filePath,{products}) 
    res.end(html)
}

const app = http.createServer((req, res) => {
    try {
        if (req.method === 'GET' && req.url === '/') {
            let filePath = path.join(path.resolve(),'public','style.css')
            let ext = path.extname(filePath)
            let contentType='text/plain'
            switch(ext){
                case ".css":contentType='text/plain'; break;
                case ".js":contentType='text/javascript'; break;
                case ".json":contentType='applicaiton/json'; break;
            }
            fs.exists(filePath,exists=>{
                if(!exists){
                    res.end('file not found!')
                    return
                }
                res.writeHead(200,{'Content-Type':contentType})
                fs.createReadStream(filePath).pipe(res)
            })
            
        }else {
            res.end('invalid route')
        }
    } catch (error) {
        console.log(error)
    }
})

app.listen(PORT, () => {
    console.log('server is running on port: ', PORT)
})
