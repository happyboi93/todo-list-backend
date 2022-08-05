// Connect mongoose and create new schema
const mongoose = require('mongoose');

// Create schema
const todolistSchema = mongoose.Schema({
  item:{
    type:String,
    required: true
  }
})

module.exports = mongoose.model('todo',todolistSchema)