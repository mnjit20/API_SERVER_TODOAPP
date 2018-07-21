const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//Load Profile Model
const Todo = require("../../models/todo");

//Load User Model
//const User = require("../../models/User");

// @route GET api/profile/test
// @desc Test profile route
// @access  Public
router.get("/test", (req, res) =>
  res.json({
    msg: "Todo Works!"
  })
);

// @route GET api/profile/user/:user_id
// @desc  Get profile by user ID
// @access Public

router.get("/email/:email_id", (req, res) => {
  const errors = {};
  Todo.find({
    email: req.params.email_id
  })
    //.populate("user", ["name", "avatar"])
    .then(todos => {
      if (!todos) {
        errors.noprofile = "There is no profile for this user";
        res.status(400).json(errors);
      }
      res.json(todos);
    })
    .catch(err => res.status(400).json(err));
});



// @route GET api/users/register
// @dess Register user
// @access  Public
router.post('/save', (req, res) => {
  console.log(JSON.stringify(req.body));
  // const {
  //   errors,
  //   isValid
  // } = validateRegisterInput(req.body);

  //Check validation
  // if (!isValid) {
  //   return res.status(400).json(errors);
  // }


  const newTodo = new Todo({
    name: req.body.name,
    email: req.body.email,
    key: req.body.key,
    text: req.body.text,
    complete: req.body.complete
  });

  console.log(newTodo);

  newTodo.save()
    .then(todo => res.json(todo))
    .catch(err => console.log(err));
});

module.exports = router;