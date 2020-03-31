const router = require("express").Router();
let User = require("../models/user.model");
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require("bcryptjs");
let sanitize = require('mongo-sanitize');
const config = require("../config");