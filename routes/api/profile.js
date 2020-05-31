const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

//@route  GET api/profile/me
//@desc   Test current users profile
//@access Private
router.get('/me', auth, async (req,res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate('user',['name']);

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route  POST api/profile
//@desc   Create/Update user profile
//@access Private
router.post('/',auth, async (req,res) => {
  const { accountNumber,Balance } = req.body;
  //Build profile Object

  const profileFields = {};
  profileFields.user = req.user.id;
  if (accountNumber) profileFields.accountNumber = accountNumber;
  if (Balance) profileFields.Balance = Balance;

  try {
    let profile = await Profile.findOne({ user:req.user.id });

    if (profile) {
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      );

      return res.json(profile);
    }


    //Create
    profile = new Profile(profileFields);

    await profile.save();

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }

  await profile.save();
} );

//@route  GET api/profile
//@desc   GET all profiles
//@access Public
router.get('/', async (req,res) => {
  try {
    const profiles = await Profile.find().populate('user','name');
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route  GET api/profile/user/:user_id
//@desc   GET profile by user ID
//@access Public
router.get('/user/:user_id', async (req,res) => {
  try {
    const profile = await Profile.findOne({ user: req.params.user_id }).populate('user','name');

    if (!profile) {
      return res.status(400).json({ msg: 'Profile not found.' });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);

    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found.' });
    }

    res.status(500).send('Server Error');
  }
});

//@route PUT api/profile/creditdebit/:accountNumber
//@desc PUT profile by account Number
//@access Private
router.put('/creditdebit/:accountNumber',auth, async (req,res) => {
  const { creditdebit, amount } = req.body;

  let profile = await Profile.findOne({ accountNumber:req.params.accountNumber });
  let balance = profile.Balance;

  if (creditdebit === "credit") {
    let newBalance = balance + amount;

    try {
      profile = await Profile.findOneAndUpdate(
            { accountNumber:req.params.accountNumber },
            { Balance: newBalance},
            { new: true }
          );

          return res.json(profile);

          await profile.save();
    } catch (e) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }else{
    if (balance >= amount) {
      let newBalance = balance - amount;

      try {
        profile = await Profile.findOneAndUpdate(
              { accountNumber:req.params.accountNumber },
              { Balance: newBalance},
              { new: true }
            );

            return res.json(profile);

            await profile.save();
      } catch (e) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }else {
      return res.json("Not enough balance.");
    }
  }
});



module.exports = router;
