import express from 'express'
import http from 'http'
import cors from 'cors'
import {Server} from "socket.io"

const app = express();
const server=http.createServer(app)
const io = new Server(server,{
  cors:{}
})

io.on('connection',socket=>{
  console.log('user connected ',socket.id);

  socket.on('send-socket',({scktid,msg})=>{
    console.log(scktid,msg)
    socket.to(scktid).emit('socket-msg',msg)
  })
  socket.on('room-msg',({room,roomMessage})=>{
    console.log({room,roomMessage})
    socket.to(room).emit('room-msg-recieved',roomMessage)
  })

  socket.on('room-name',room=>{
    socket.join(room)
    console.log(socket.id,' joined...')
    
  })
  socket.on('message',msg=>{
    console.log('index.js: ',msg)
    // io.emit('emit-message',msg)
    socket.broadcast.emit('emit-message',msg)
  })
  
  socket.on('disconnect',()=>{
    console.log('user disconnected ',socket.id)
  })
})

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
