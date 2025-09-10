import express from 'express';
import http from 'http'
import { WebSocket,WebSocketServer } from 'ws';

const app = express()
const server = http.createServer(app)
const wss=new WebSocketServer({server})

wss.on('connection',ws=>{
    console.log('client connected!')

    ws.on('message',message=>{
        console.log('recieved message',message.toString())
        //broadcast
        wss.clients.forEach(client=>{
            if(client!=ws&& client.readyState==WebSocket.OPEN){
                client.send(message.toString());
            }
        })
    })

    ws.on('close',()=>{
        console.log('connection closed!')        
    })
})

app.get('/',(req,res)=>{
    res.send('home')
})


server.listen(3000,()=>{
    console.log('server running on 3000')
})
