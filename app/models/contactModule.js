const mongoose=require('mongoose')

const Schema=mongoose.Schema

const ContactSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phno:{
        type:String
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
})
const Contact=mongoose.model('Contact',ContactSchema)
module.exports=Contact