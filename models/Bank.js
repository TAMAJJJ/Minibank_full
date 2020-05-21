const mongoose = require('mongoose');

const BankSchema = new mongoose.Schema({
  totalUser: {
    type: Integer,
    required: true,
    default: 0
  },
  totalDeposit: {
    type: Integer,
    required: true,
    default: 0
  }
});

module.export = Bank = mongoose.model('bank', BankSchema);
