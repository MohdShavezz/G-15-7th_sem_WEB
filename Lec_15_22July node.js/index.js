import http from 'http'
import fs from 'fs/promises'
const PORT = process.env.PORT

const product=[
    {pid:1,name:'cover',qty:10},
    {pid:2,name:'pen',qty:20},
    {pid:3,name:'phone',qty:30},
]

function getUser(req,res){
    const pid=parseInt(req.url.split('/')[2])
    const pd=product.find(p=>p.pid===pid)
    if(pd){
        res.end(JSON.stringify(pd))
    }else{
        res.end('no product found!')
    }
    res.end()
}

const app = http.createServer((req, res) => {
    try {
        if (req.method === 'GET' && req.url === '/') {
            res.setHeader("Content-Type", "text/html");
            res.statusCode = 201;
            const data = '<h2>this is html</h1>'
            res.end(data)
        } else if (req.method === 'GET' && req.url === '/content') {
            fs.readFile('./public/test.txt').then(data => res.end(data)).catch(err => res.end(err))
        } else if (req.method === 'GET' && req.url === '/html') {
            fs.readFile('./public/index.html').then(data => {
                res.setHeader('Content-Type','text/plain')
                res.write(data)
                res.end()
            })
        } else if (req.method === 'GET' && req.url === '/products') {
            res.writeHead(200,{"content-type":"text/html"})
           let html=`<h2>Product List</h2><ul>`
           product.forEach(product=>{
            html+=`<li> Pid: ${product.pid} Name: ${product.name}  Qty: ${product.qty} </li>`
           })
           html+='</ul>'
           res.end(html)
        }else if(/^\/product\/\d+$/.test(req.url)){ 
            getUser(req,res)
        } else {
            res.end('invalid route')
        }
    } catch (error) {
        console.log(error)
    }
})

app.listen(PORT, () => {
    console.log('server is running on port: ', PORT)
})
