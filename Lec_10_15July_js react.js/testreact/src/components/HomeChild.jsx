import React from 'react'

const HomeChild = (props) => {
  let {count,incCount}=props;
  return (
    <div style={{backgroundColor:'yellow'}}>
      HomeCHild
      <p>{count}</p>
      <button onClick={incCount}>click</button>
    </div>
  )
}

export default HomeChild
