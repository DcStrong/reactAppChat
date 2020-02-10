const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({

   login:{
     type: String,
     required: true,
     unique: true,
     trim: true,
     minlength: 4
   },
   password: {
    type: String,
    required: true,
    trim: true,
    minlength: 4
   },
},
  {
  timestamps: true
});

const User = mongoose.model("User", userSchema);

module.exports = User;