import http from 'http'
import ejs from 'ejs'
import path from 'path'
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
            res.end('home route')
        }else if(req.method === 'POST' && req.url === '/submit') {
            let str=''
            req.on('data',(chunk)=>str+=chunk)
            req.on('end',()=>{
                console.log(str)
                res.end(str)
            })            
        }else if(req.method === 'GET' && req.url === '/products') {
            try {
                getProducts(req,res)
            } catch (error) {
                console.log(error)
            }     
        }
         else {
            res.end('invalid route')
        }
    } catch (error) {
        console.log(error)
    }
})

app.listen(PORT, () => {
    console.log('server is running on port: ', PORT)
})
