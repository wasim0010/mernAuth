const mongoose = require('mongoose')
 const dbconfig = async()=>{
try {
    mongoose.connect(process.env.DB_CONNECT)
    console.log("mongodb is running")
} catch (error) {
    console.log("error")
}


 }
module.exports=dbconfig