import crypto from 'crypto'

//create hash
// let hash=crypto.createHash('sha256')
// hash.update('password123')
// console.log(hash.digest('hex'))

//generate randomBytes
// crypto.randomBytes(32,(err,buf)=>{
//     if(err) throw new Error('Error accured!')
//     console.log(buf.toString('hex'))
// })




// encryption (cipher)
const algorithm = 'aes-256-cbc'; // Example algorithm
const key = crypto.randomBytes(32); // 256-bit key for AES-256
const iv = crypto.randomBytes(16);
function encrypt(text){
    const cipher = crypto.createCipheriv(algorithm,key,iv)
    let encrypted=cipher.update(text,'utf8','hex');
    encrypted=cipher.final('hex')
    return encrypted
}
//decryption (decipher)
function decrypt(cipher){
    const decipher = crypto.createDecipheriv(algorithm,key,iv)
    let encrypted=decipher.update(cipher,'hex','utf8');
    encrypted=decipher.final('utf8')
    return encrypted
}

const encryptedData=encrypt('password')
console.log(encryptedData)
console.log(decrypt(encryptedData))
