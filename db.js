// 
require("dotenv").config() ;
const Sequelize = require('sequelize');

// Initialize Sequelize


const URL = process.env.URL ;

const sequelize = new Sequelize(URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Add this line if SSL is enabled
    }
  }
});

// const sequelize = new Sequelize("postgres" , "postgres" , password, {
//   host: process.env.HOSTNAME,
//   dialect: 'postgres', // specify the dialect
//   port: 5432, // default PostgreSQL port
// });

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to PostgreSQL database successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the PostgreSQL database:', err);
  });

module.exports = sequelize ;