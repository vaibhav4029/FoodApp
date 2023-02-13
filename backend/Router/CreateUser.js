const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtSecret = "HereStringOf32CharacterShouldBePresent"

router.post(
  "/CreateUser",
  body('email').isEmail(),
  body('password','length is small').isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const salt = await bcrypt.genSalt(10);
    let secPass = await bcrypt.hash(req.body.password,salt);
    try {
      await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (err) {
      console.log(err);
      res.json({ success: false });
    }
  }
);

router.post("/LoginUser",
body('email').isEmail(),
body('password','length is small').isLength({ min: 5 }),async (req, res) => {
  let email = req.body.email;
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let userData = await User.findOne({email:email});
      if(!userData){
        return res.status(400).json({errors:"Try logging in with correct credentials"})
      }
      const pswdCompare = await bcrypt.compare(req.body.password,userData.password);//it may be true or false depend on if password are same then true
      if(!pswdCompare){
        return res.status(400).json({errors:"Try logging in with correct credentials"})
      }
      const data = {
        user:{
          id:userData.id
        }
      }
      const authToken = jwt.sign(data,jwtSecret)
      return res.json({success:true,authToken:authToken})
    } catch (err) {
      console.log(err);
      res.json({ success: false });
    }
  }
);


module.exports = router;
