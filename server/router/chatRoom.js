const router = require("express").Router();
let ChatRoom = require("../models/chatRoom.model");
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require("bcryptjs");
let sanitize = require('mongo-sanitize');
const config = require("../config");


router.route('/searchRoom').post((req, res) => {
  ChatRoom.findAll()
  .then(rooms => {
    res.send(rooms);
  })
})

module.exports = router;