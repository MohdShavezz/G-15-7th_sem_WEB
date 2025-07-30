const {MongoClient} = require('mongodb')
const url='mongodb://127.0.0.1:27017'
const dbName='g16_db'
const client=new MongoClient(url)

async function fn() {
    try {
        await client.connect()
        console.log('connected to mongodb')
        const db=client.db(dbName)
        const collection=db.collection('users')//create collection
        const dummyUsers=[
            {name:'alice',age:21,email:'alice@gamil.com'},
            {name:'john',age:21,email:'john@gamil.com'},
            {name:'peter',age:25,email:'peter@gamil.com'},
        ]
        const res= await collection.insertMany(dummyUsers)
        console.log('inserted count: ',res.insertedCount)        
    } catch (error) {
        console.log('error : ',error)
    }
}

fn()
