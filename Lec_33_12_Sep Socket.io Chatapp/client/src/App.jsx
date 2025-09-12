import { useEffect } from 'react'
import { useMemo } from 'react'
import { useState } from 'react'
import {io} from 'socket.io-client'
import './style.css'

function App() {


  const socket=useMemo(()=>io('http://localhost:3000'),[])

  const [socketId,setSocketId]=useState('')
  const [msg,setMsg]=useState('')
  const [scktid,setScktId]=useState('')
  const [room,setRoom]=useState('')
  const [roomMessage,setRoomMessage]=useState('')
  const [messages,setMessages]=useState([])


  useEffect(()=>{
    socket.on('connect',()=>{
      setSocketId(socket.id)
    })

    socket.on('socket-msg',msg=>{
       setMessages(pre=>[...pre,msg])
    })
    socket.on('emit-message',msg=>{
       setMessages(pre=>[...pre,msg])
    })

    socket.on('room-msg-recieved',roomMessage=>{
      setMessages(pre=>[...pre,roomMessage])
    })

    return ()=>socket.disconnect()
  },[socket])

  function clickSendMsg(e){
    e.preventDefault()
    //event emit 
    socket.emit('message',msg)
    setMsg('')
  }

  function clickSendRoom(e){
    e.preventDefault()
    socket.emit('room-name',room)
    setRoom('')
  }
  function clickRoomMsg(e){
    e.preventDefault()
    console.log({room,roomMessage})
    socket.emit('room-msg',{room,roomMessage})
    setRoomMessage('')
  }
  function sendToSocket(e){
    e.preventDefault()
    console.log(scktid,msg)
    socket.emit('send-socket',{scktid,msg})
  }
  return (
    <>
      <h1>Vite + React</h1>      
      {socketId}
      <form onSubmit={sendToSocket}>
        <input type="text" placeholder='socket id' value={scktid} onChange={e=>setScktId(e.target.value)}/>
        <button type='submit'>send msg to socket</button>
      </form> <br />
      <form onSubmit={clickSendMsg}>
        <input type="text" placeholder='enter message' value={msg} onChange={e=>setMsg(e.target.value)}/>
        <button type='submit'>send</button>
      </form> <br />
      <form onSubmit={clickSendRoom}>
        <input type="text" placeholder='room name' value={room} onChange={e=>setRoom(e.target.value)}/>
        <button type='submit'>Join</button>
      </form><br />
 <form onSubmit={clickRoomMsg}>
        <input type="text" placeholder='enter room message' value={roomMessage} onChange={e=>setRoomMessage(e.target.value)}/>
        <button type='submit'>send</button>
      </form> <br />

      <h2>Messages:</h2>
      {
        messages.map((msg,ind)=>(
          <div key={ind}> 
            {msg}
          </div>
        ))
      }
    </>
  )
}

export default App
