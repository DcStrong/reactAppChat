const router = require("express").Router();
let User = require("../models/user.model");
const jwt = require('jsonwebtoken')
const bcrypt = require("bcryptjs");
let sanitize = require('mongo-sanitize');
const config = require("../config");


router.route('/add').post((req, res) => {
  let today = new Date();
  let userData = { email: sanitize(req.body.email), password: req.body.password, created: today };
  User.findOne({
    where: {
      email: req.body.email
    }
  })
  .then(user => {
    if(!user) {
      if(req.body.password === req.body.passwordConfirm) {
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(req.body.password, salt, (err, hash) => {
            userData.password = hash;
            User.create(userData)
            .then(user => {
              res.status(200).send({message: `Пользователь ${user.email} успешно зарегистрирован`})
            })
            .catch(err => {
              res.send('error:' + err);
            })
          })
        })
      } else {
        res.status(400).send("Пароли не совпадают!");
      }
    } else {
      res.status(400).send("Данный email уже занят, Упс!");
    }
  })
  .catch(err => {
    res.send('error:' + err);
  })
});

router.route('/login').post((req, res) => {

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({
    where: {
      email: email
    }
  }).then((user) => {
    if (!user) {
      res.status(400).send(console.log('User is not defined'));
    } else {
      bcrypt.compare(password, user.password, (err, result) => {
        if (!result) {
          res.status(400).send(error => {console.log(error)});
        } else {
          let userSissid = {
            token: jwt.sign(user.dataValues, config.SESSION_SECRET, { expiresIn: 1440 }),
          }

          res.status(200).json(userSissid)
        }
      });
    }
  })
})


module.exports = router;