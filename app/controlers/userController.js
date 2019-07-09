const express=require('express')
const User=require('../models/user')
const router=express.Router()
const authentiateUser=require('../middlewares/authenticate')
// const _=require('')
router.post('/register',(req,res)=>{
    const body=req.body
    const user=new User(body)
    user.save()
    .then(user=>{
        res.json(user)
    })
    .catch(err=>{
        res.json(err)
    })
})
router.post('/login',(req,res)=>{
    const body=req.body
    User.findByCredentials(body.email,body.password)
    .then(user=>{        
       return user.generateToken()
        })
        .then(token=>{
            res.send({token})
        })        
    .catch(err=>{
        res.send(err)
    })
 })
router.get('/account',authentiateUser,function(req,res){
    const {user}=req
    res.json(user)
})

router.put('/logout',authentiateUser,function(req,res){
    const { user,token }=req
    User.findByIdAndUpdate(user._id,{$pull:{tokens:{token:token}}})
    .then(function(){
        res.send({notice:'successfully logged out'})
    })
    .catch(function(err){
        res.send(err)
    })
})

const userRouter=router
module.exports=userRouter