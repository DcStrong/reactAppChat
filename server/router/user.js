const router = require("express").Router();
let User = require("../models/user.model");
const bcrypt = require("bcryptjs");


router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error' + err));
});



router.route('/add').post((req, res) => {
  const login = req.body.login;
  const password = req.body.password;


  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      const newUser = new User ({login, password: hash});

      newUser.save()
      .then(() => res.json('User add!'))
      .catch((err) => res.status(400).json('Error' + err));

      })
    });
  });
  //bcrypt code
    // bcrypt.hash(password, null, null, (err, hash) => {

    //   const newUser = new User ({username, password: hash});

    //   newUser.save()
    //   .then(user => {
    //     console.log(user);
    //     res.json({
    //       ok: true,
    //     })
    //   })
    // })


router.route('/login').post((req, res) => {
  const login = req.body.login;
  const password = req.body.password;



  User.findOne({
    login
  }).then((users) => {

    if(!users) {
      const fields = [];

      res.json({
        ok: false,
      })
    } else {
      bcrypt.compare(password, users.password, (err, result) => {
        if(!result) {
          res.json({
            ok: false,
            fields: ['password']
          })
        } else {
          console.log(users);

          req.session.userId = users._id;
          req.session.userLogin = users.login;

          res.json({
            ok: true,
          })
        }
      });
    }
  })
})


module.exports = router;