import { useEffect } from 'react'
import { useMemo } from 'react'
import { useState } from 'react'
import {io} from 'socket.io-client'

function App() {


  const socket=useMemo(()=>io('http://localhost:3000'),[])

  const [socketId,setSocketId]=useState('')

  useEffect(()=>{
    socket.on('connect',()=>{
      setSocketId(socket.id)
    })
    

    return ()=>socket.disconnect()
  },[])

  return (
    <>
      <h1>Vite + React</h1>      
      {socketId}
      <p>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
