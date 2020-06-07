const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
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

module.exports = Profile = mongoose.model('profile', ProfileSchema);
