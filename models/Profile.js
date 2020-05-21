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
    type: Double
  }
});

module.export = Profile = mongoose.model('profile', ProfileSchema);
