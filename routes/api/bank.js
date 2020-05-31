const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Bank = require('../../models/Bank');
const User = require('../../models/User');

//@route  GET api/bank/info
//@desc   show bank status
//@access Private
router.get('/info', auth, async (req,res) => {
  try {
    const bank = await Bank.findOne({ bankName: 'salt' });

    if (!bank) {
      return res.status(400).json({ msg: 'There is no such bank' });
    }

    res.json(bank);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route  GET api/bank
//@desc   Create/Update bank info
//@access Private
router.post('/',auth, async (req,res) => {
  const { bankName, totalUser, totalDeposit } = req.body;
  //Build profile Object
  const bankFields = {};

  if (bankName) bankFields.bankName = bankName;
  if (totalUser) bankFields.totalUser = totalUser;
  if (totalDeposit) bankFields.totalDeposit = totalDeposit;

  try {
    let bank = await Bank.findOne({ bankName });

    if (bank) {
      console.log("hi");
      bank = await Bank.findOneAndUpdate(
        {bankName: "salt"},
        { $set: bankFields },
        { new: true }
      );

      return res.json(bank);
    }


    //Create
    bank = new Bank(bankFields);
    update = true;

    await bank.save();

    res.json(bank);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }

  // await bank.save();
} )

//@route  GET api/bank
//@desc   GET all banks
//@access Public
router.get('/', async (req,res) => {
  try {
    const banks = await Bank.find().populate('user','name');
    res.json(banks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route  GET api/profile/user/:bankName
//@desc   GET profile by bankName
//@access Public
router.get('/user/:bankName', async (req,res) => {
  try {
  const bank = await Bank.findOne({ bankName: 'salt' });

    if (!bank) {
      return res.status(400).json({ msg: 'Bank not found.' });
    }

    res.json(bank);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


module.exports = router;
