const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
   email:{
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: {
      validator: function(v) {
        return /@/.test(v);
      },
      message: props => `${props.value} is not a valid email!`
    },
  },
   password: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
   },
},
  {
  timestamps: true
});


const User = mongoose.model("User", userSchema);

module.exports = User;