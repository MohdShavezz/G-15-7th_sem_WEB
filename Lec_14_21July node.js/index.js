import {EventEmitter} from 'events'
const myEmitter=new EventEmitter()

myEmitter.on('greet',(data)=>{
    console.log('greet event call!',data)
})
myEmitter.emit('greet','good morning')

myEmitter.once('first',()=>{ //once run one time
    console.log('first event invoked!')
    myEmitter.emit('second')
})
myEmitter.on('second',()=>{
    console.log('second event invoked!')
    myEmitter.emit('third')
})
myEmitter.on('third',()=>{
    console.log('third event invoked!')
})

myEmitter.emit('first')
myEmitter.emit('first')


myEmitter.on('error',(err)=>{
    console.log("Error comes: ",err)
})

myEmitter.emit('error', new Error("Something went wrong!"))