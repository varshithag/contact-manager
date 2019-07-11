const express=require('express')
const cors = require('cors')
const app=express()
const mongoose=require('./config/database')
// const port=3001

const contactRouter=require('./app/controlers/contactControler')
const userRouter=require('./app/controlers/userController')


app.use(express.json())
app.use(cors())
app.use('/user',userRouter)
app.use('/contacts',contactRouter)



// const Note=require('./app/models/note')

const path = require("path");
	const port = process.env.PORT || 3001
	app.use(express.static(path.join(__dirname,"contact-client/build")))


	app.get("*",(req,res)=>{
    		res.sendFile(path.join(__dirname + "/contact-client/build/index.html"))
	})



//Schema -ocb

app.get('/',(req,res)=>{
    res.json("Welcome to Contact Manager")
})


app.listen(port,()=>{
    console.log('listening to port',port)
})

