const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  accountNumber: {
    type: String,
    required: true
  },
  Balance:{
    type: Number,
    default: 0
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
