const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  accountNumber: {
    type: String,
    required: true
  },
  targetAccount: {
    type: String,
    required: true
  },
  Amount:{
    type: Number,
    required: true
  }
});

module.exports = Transaction = mongoose.model('transaction', TransactionSchema);
