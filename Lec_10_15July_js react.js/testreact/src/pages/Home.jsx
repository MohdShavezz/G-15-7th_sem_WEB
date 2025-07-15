import React, { useState } from 'react'
import HomeChild from '../components/HomeChild'

const Home = () => {

  const [count,setCount]=useState(0)

  function incCount(){
    setCount(p=>p+1)
  }

  return (
    <div>
      Home
      <p>Count: {count}</p>
      <button onClick={incCount}>click</button>
      <HomeChild count={count} incCount={incCount}/>
    </div>
  )
}

export default Home
