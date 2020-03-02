const router = require("express").Router();
let User = require("../models/user.model");
const bcrypt = require("bcryptjs");
let sanitize = require('mongo-sanitize');

router.route('/add').post((req, res) => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(req.body.password, salt, (err, hash) => {
      let user = new User({
          email: sanitize(req.body.email),
          password: hash
      });
      //Валидация. Проверяем в моделе, если ничего не возвращается то обрабатываем then

      user.validate()
        .then(()=> {
          user.save()
            .then(() =>  res.status(200).send({message: `Пользователь ${user.email} успешно зарегистрирован`}))
            .catch((error) => {
              if(error.code === 11000) {
                res.status(400).send("Данный email уже занят, Упс!");
              }
            });
          //Если возвращается ошибка на валидации, падает в кетч и выполняется кетч.
          //в кетче можно создать объект в который сложить все ошибки и отправлять клиенту в ответ
        })
        .catch(error => {
            res.json(error.errors['email'].message);
        });
    })
  });
});

router.route('/login').post((req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({
    email
  }).then((users) => {
    if (!users) {
      res.status(400).send(console.log('User is not defined'));
    } else {
      bcrypt.compare(password, users.password, (err, result) => {
        if (!result) {
          res.status(400).send(error => {console.log(error)});
        } else {
          
          req.session.userId = users._id;
          req.session.userLogin = users.email;

          res.status(200).json({
            email: req.session.userLogin,
            sessid: req.session.userId
          })
        }
      });
    }
  })
})


module.exports = router;