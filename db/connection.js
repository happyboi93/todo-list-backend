const mongoose = require('mongoose')
// Connect mongodb
const connectDB =(url)=>{
 return mongoose.connect(url,{
     useNewUrlParser:true,
     useUnifiedTopology: true
 }).then(()=>console.log('Database connnected'))
.catch(err=>console.log(err))
}

module.exports = connectDB