const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, 
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    
  }
},{versionKey:false});

const UserModal =new mongoose.model('user', userSchema);
module.exports = {UserModal}
