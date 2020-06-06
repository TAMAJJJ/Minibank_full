const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Transaction = require('../../models/Transaction');
const User = require('../../models/User');
const Profile = require('../../models/Profile');

//@route  POST api/transaction
//@desc   Create transaction
//@access Private
router.post('/',auth, async (req,res) => {
  const { accountNumber,targetAccount, Amount } = req.body;

  //Build transaction Object
  const transactionFields = {};
  transactionFields.user = req.user.id;
  if (accountNumber) transactionFields.accountNumber = accountNumber;
  if (targetAccount) transactionFields.targetAccount = targetAccount;
  if (Amount) transactionFields.Amount = Amount;

  try {
    //Create
    transaction = new Transaction(transactionFields);
    let user = await Profile.findOne({ accountNumber : accountNumber });
    let target = await Profile.findOne({ accountNumber : targetAccount });

    const newUserBalance = user.Balance - Amount;
    const newTargetBalance = target.Balance + Amount;

    user = await Profile.findOneAndUpdate(
      { accountNumber : accountNumber },
      { Balance : newUserBalance },
      { new:true }
    );

    target = await Profile.findOneAndUpdate(
      { accountNumber : targetAccount },
      { Balance : newTargetBalance },
      { new:true }
    );

    await user.save();
    await target.save();
    //res.json(user);
    res.json(transaction);

    //update profile

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }

  await transaction.save();
} )

//@route  GET api/transaction
//@desc   GET all transactions
//@access Public
router.get('/', async (req,res) => {
  try {
    const transactions = await Transaction.find().populate('user','name');
    res.json(transactions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


module.exports = router;
