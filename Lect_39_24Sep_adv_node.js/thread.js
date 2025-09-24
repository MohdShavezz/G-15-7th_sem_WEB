const os = require('os')
const crypto = require('crypto') // for cpu intensive task
// console.log(os.cpus())
// process.env.UV_THREADPOOL_SIZE=8

const current = Date.now()
fn()
function fn() {
    crypto.pbkdf2('pass1', 'salt', 100000, 64, 'sha512', () => {
        console.log('pass1 completed in time (ms): ', Date.now() - current)
    })
    crypto.pbkdf2('pass2', 'salt', 100000, 64, 'sha512', () => {
        console.log('pass2 completed in time (ms): ', Date.now() - current)
    })
    crypto.pbkdf2('pass3', 'salt', 100000, 64, 'sha512', () => {
        console.log('pass3 completed in time (ms): ', Date.now() - current)
    })
    crypto.pbkdf2('pass4', 'salt', 100000, 64, 'sha512', () => {
        console.log('pass4 completed in time (ms): ', Date.now() - current)
    })
    crypto.pbkdf2('pass5', 'salt', 100000, 64, 'sha512', () => {
        console.log('pass5 completed in time (ms): ', Date.now() - current)
    })
    crypto.pbkdf2('pass6', 'salt', 100000, 64, 'sha512', () => {
        console.log('pass6 completed in time (ms): ', Date.now() - current)
    })
    crypto.pbkdf2('pass7', 'salt', 100000, 64, 'sha512', () => {
        console.log('pass7 completed in time (ms): ', Date.now() - current)
    })
    crypto.pbkdf2('pass8', 'salt', 100000, 64, 'sha512', () => {
        console.log('pass8 completed in time (ms): ', Date.now() - current)
    })
}

console.log('completed all')