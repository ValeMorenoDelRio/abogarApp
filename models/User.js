const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  phone: {
    type: String,
    required: false
  },
  job: {
    type: String,
    required: false
  },
  country: {
    type: String,
    required: false
  },
  address: {
    type: String,
    required: false
  },
  zip: {
    type: String,
    required: false
  }
});

module.exports = User = mongoose.model('user', UserSchema);
