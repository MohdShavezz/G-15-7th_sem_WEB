import process, { cwd } from 'process'

console.log(process.env.PORT)
// console.log(process.argv)
// process.argv.push('pathnew')
// console.log(process.argv[2])
// console.log(process.pid)
// console.log(process.cwd())
// console.log(process.title)
// console.log(process.memoryUsage())
// console.log(process.uptime())
process.on('exit',()=>{
    console.log('exit run.')
})
process.exit(0)
console.log('after exit')

