const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();
// import todolistRoute
const {getRoute,postRoute, putRoute, deleteRoute} = require('./routes/todolistRoute')
const app = express()
// use express.json() to get data into jsn format
app.use(express.json())

// port
const PORT = process.env.PORT || 5000;

// todolistRoute route
app.use('/', getRoute)
app.use('/',postRoute)
app.use('/',putRoute)
app.use('/',deleteRoute)
// Connect mongodb
mongoose.connect(process.env.DB_CONNECT,{
     useNewUrlParser:true,
     useUnifiedTopology: true
 }).then(()=>console.log('Database connnected'))
.catch(err=>console.log(err))


// Add port and connect server
app.listen(PORT,()=> console.log(`server connected to port: ${PORT}`))













// const session = require('express-session')
// const passport = require('passport');
// const router = require('./routes/index')
// const app = express();
// require('./routes/auth');


// app.use(express.urlencoded({extended:true}))
// app.use(
//     session({
//       secret: 'keyboard cat',
//       resave: false,
//       saveUninitialized: false,
//       // store:  MongoStore({ mongooseConnection: mongoose.connection }),
//     })
//   );
  // initialize passport
// app.use(passport.initialize())
// app.use(passport.session())

// app.use(require('./routes/index'))

// app.listen(5000,()=> console.log('listening on port: 5000...'));










// const express = require('express');
// const app = express()
// const mongoose=require('mongoose');
// const dotenv = require('dotenv')
// const passport = require('passport')
// const session = require('express-session')
// const MongoStore = require('connect-mongo')(session)
// require('./config/passport')(passport);

// // connect to mongodb
// const PORT = process.env.PORT||3000;
// dotenv.config({ path: './config/config.env' })

// mongoose.connect(process.env.MONGO_URI,{
//     useNewUrlParser:true,
//     useUnifiedTopology: true
// })
// app.use(express.static('public'))
// app.set('view engine','ejs');

// app.use(express.urlencoded({extended:true}))
// app.use(
//     session({
//       secret: 'keyboard cat',
//       resave: false,
//       saveUninitialized: false,
//       store: new MongoStore({ mongooseConnection: mongoose.connection }),
//     })
//   )
//   // Passport middleware
// app.use(passport.initialize())
// app.use(passport.session())

// // import routes
// app.use(require("./routes/index"))
// app.use('/auth', require('./routes/auth'))

// app.listen(PORT,console.log(`listening at ${PORT}`))
