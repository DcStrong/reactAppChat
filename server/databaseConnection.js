const mongoose = require("mongoose");


const uri = process.env.MONGO_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
.catch(error => handleError(error));
const connection = mongoose.connection;
connection.once('open', () => {
  console.log(`MongoDB has be connected successfully`)
})