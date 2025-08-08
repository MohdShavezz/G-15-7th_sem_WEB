function counter(){
  count=0
  function inc(){
    count++
  }
  function dec(){
    count--
  }
  function reset(){
    count=0
  }
  function getVal(){
    return count
  }
  
  return {inc,dec,reset,getVal}
  
}

let u1=counter()
u1.inc()
u1.inc()
let u2=counter()
u2.inc()
u2.inc()
console.log(u1.getVal())
console.log(u2.getVal())



