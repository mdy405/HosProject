// user.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var user = new Schema({
  userName: {
    type: String
  },
  phone:{
  	type: Number
  },
  password:{
  	type: String
  },
  email: {
     type: String
  }
},{
    collection: 'users'
});

module.exports = mongoose.model('user', user);