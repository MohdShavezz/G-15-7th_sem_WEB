(()=>{    
function fn1(){
    console.log('fn1')
    fn2()
}
function fn2(){
    console.log('fn2')
    fn3()
}
function fn3(){
    process.nextTick(()=>console.log('Tick'))
    setImmediate(()=>console.log('Immediate'))
    setTimeout(() => {
        console.log('Time')
    }, 0);
    console.log('fn3')
    // console.trace()
}
fn1()
})()

console.log('1. Start');
// Next tick queue
process.nextTick(() => console.log('2. Next tick'));
// Microtask queue (Promise)
Promise.resolve().then(() => console.log('3. Promise'));
// Timer phase
setTimeout(() => console.log('4. Timeout'), 0);
// Check phas
setImmediate(() => console.log('5. Immediate'));

console.log('6. End');


// process.nextTick vs setTimeout vs setImmediate

