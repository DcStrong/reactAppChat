const Sequelize = require('sequelize');
const db = require('../databaseConnection');

module.exports = db.sequelize.define(
  'chatRooms',
  {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING
    },
    userOnline: {
      type: Sequelize.INTEGER
    },
    users: {
      type: Sequelize.INTEGER
    },
  },
  {
    timestamps: false
  }
)