const express=require('express')
const session=require('express-session')
const app =express()
const PORT=5000

app.use(session({
  secret: 'uniqueKey',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000*5 }
}))
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    let username=req.session.username
    if(username){
        res.send(`<h2>Hello, ${username}! </h2>
            <a href="/logout">Logout</a>
            `)
    }else{
          res.send(`
            <form method="POST" action="/login">
            <h2>Please Login </h2>
            <input name="username" placeholder="enter username" />
            <button href="/login" type="submit">Login</button>
            </form>
            `)
    }
})

app.post('/login',(req,res)=>{
  const {username}=req.body
  if(username){
    req.session.username=username    
    res.redirect('/')
  }else{
    res.send("Login failed.")
  }
})

app.get('/logout',(req,res)=>{
 req.session.destroy(err=>{
    if(err){
        return res.send('logout failed')
    }else{
        res.redirect('/')
    }
 })
})


app.listen(PORT,()=>{
    console.log('serber is running on: ',PORT)
})