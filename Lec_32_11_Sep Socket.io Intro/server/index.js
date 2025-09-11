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

  
  socket.on('disconnect',()=>{
    console.log('user disconnected ',socket.id)
  })
})

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
