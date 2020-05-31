const mongoose = require('mongoose');

const BankSchema = new mongoose.Schema({
  bankName: {
    type: String,
    required: true
  },
  totalUser: {
    type: Number,
    required: true,
    default: 0
  },
  totalDeposit: {
    type: Number,
    required: true,
    default: 0
  }
});

module.exports = Bank = mongoose.model('bank', BankSchema);
