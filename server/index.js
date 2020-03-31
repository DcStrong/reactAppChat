const express = require("express");
const cors = require("cors");
const http = require("http");
// const expressSession = require('express-session');
// const SessionStore = require('express-session-sequelize')(expressSession.Store);
// const db = require('./databaseConnection');
const socketio = require('socket.io');
const socketRoute = require('./router/socketRoute');
require("dotenv").config();

const config = require("./config");


const app = express();
const server = http.createServer(app);

module.exports = server;

const PORT = process.env.PORT || 5000;
const io = socketio(server);

module.exports = io;


// const sequelizeSessionStore = new SessionStore({
//   db: db.sequelize,
// });

// app.use(expressSession({
//  secret: config.SESSION_SECRET,
//  resave: false, saveUninitialized: false,
//  store: sequelizeSessionStore
// }));




// app.use(
//   session({
//     secret: config.SESSION_SECRET,
//     resave: true,
//     saveUninitialized: false,
//     store: new MongoStore({
//       mongooseConnection: mongoose.connection
//     })
//   })
// );


app.use(cors());
app.use(express.json());

const userRouter = require("./router/user");

app.use('/user', userRouter);

io.on('connection', socketRoute.onConnection.bind(io));

server.listen(PORT, () => {
  console.log(`Server has be started: ${PORT}`);
});
