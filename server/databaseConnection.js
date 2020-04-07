const Sequelize = require('sequelize');
const db = {}


const sequelize = new Sequelize(
  'reactchat',
  'root',
  '',
  {
    host: 'localhost',
    // port: '8889',
    dialect: 'mysql',
    operatorAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
    
  },

  
);
  
try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;



module.exports = db;