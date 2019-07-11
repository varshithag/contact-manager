const mongoose=require('mongoose')
mongoose.Promise=global.Promise

// mongoose.connect('mongodb://localhost:27017/contact-app',{useNewUrlParser:true})
// .then((res)=>{
//     console.log('connected to db')
// })
// .catch((err)=>{
//     console.log('erro connecting to db')
// })

const pathLocal="mongodb://localhost:27017/notes-app-feb"	
const CONNECTION_URI = process.env.MONGODB_URI || "mongodb+srv://varshithag:varshithag@cluster0-x4mqd.mongodb.net/test?retryWrites=true&w=majority"
	mongoose
		.connect(connection_uri, {
			useNewUrlParser: true
		})
		.then(() => {
			console.log("db connected succefully");
		})
			.catch(err => {
			console.log("Error connecting to DB", err);
		});
module.exports=mongoose
