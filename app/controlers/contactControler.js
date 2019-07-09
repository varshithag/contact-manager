const Contact=require('../models/contactModule')
const express=require('express')
const router=express.Router()
const authentiateUser=require('../middlewares/authenticate')
router.get('/',authentiateUser,(req,res)=>{ 
    const {user}   =req
    Contact.find({user:user._id})
    .then((contacts)=>{
        res.json(contacts)
    })
    .catch((err)=>{
        res.json(err)
    })

}) 
router.post('/',authentiateUser,(req,res)=>{
    const body=req.body
    const {user}=req
    const contact=new Contact(body)
    contact.user=user._id
    contact.save()
    .then((contact)=>{
        res.json(contact)
    })
    .catch((err)=>{
        res.json(err)
    })
})
router.get('/:id',authentiateUser,(req,res)=>{
    const id=req.params.id
    Contact.findOne({
        user:req.user._id,
        _id:id
    })
    .then((contact)=>{
        res.json(contact)
    })
    .catch((err)=>{
        res.json(err)
    })
})
router.delete('/:id',authentiateUser,(req,res)=>{
    const id=req.params.id
    Contact.findOneAndDelete({
        user:req.user._id,
        _id:id
    })
    .then((contact)=>{
        res.json(contact)
    })
    .catch((err)=>{
       res.json(err)
    })
})
router.put('/:id',(req,res)=>{
    const id=req.params.id
    const body=req.body
    
    // Contact.findOneAndUpdate(id,body,{new:true})
    Contact.findByIdAndUpdate({
        user:req._id,
        _id:id},
        {$set:body},
        {new:true}
    )
    .then((contact)=>{
        cons
        res.json(contact)
    })
    .catch((err)=>{
        res.json(err)
    })
})
const contactRouter=router
module.exports=contactRouter