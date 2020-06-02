const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const {check, validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');

const User = require('../../models/User');

//@route  GET api/auth
//@desc   Test route
//@access Public
router.get('/',auth, async (req,res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

//@route  POST api/auth
//@desc   Authenticate user & get token
//@access Public
router.post(
  '/',
  [
    check("email","Please include valid email address").isEmail(),
    check('password',"Password is required").exists()
  ],
  async (req,res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name,email,password,role } = req.body;

  try {
    //see if user exists
    let user = await User.findOne({ email });

    if (!user) {
      res.status(400).json({ errors: [{ msg: 'Invalid Credentials.' }] });
    }

    //check password
    const isMatch = await (password == user.password);

    if (!isMatch) {
      res.status(400).json({ errors: [{ msg: 'Invalid Credentials.' }] });
    }

    //return jsonwebtoken
    const payload = {
      user: {
        id: user.id,
        role: user.role
      }
    }

    jwt.sign(
      payload,
      config.get('jwtSecret'),
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server error');
  }

});

module.exports = router;
