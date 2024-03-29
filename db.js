// 
require("dotenv").config() ;
const Sequelize = require('sequelize');

// Initialize Sequelize


const URL = process.env.URL ;

// connecting to the database hosted on render.com using its external link.

const sequelize = new Sequelize(URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Add this line if SSL is enabled
    }
  }
});



// This below code can be used to connect the app with local database 

// const db = process.env.db
// const username = process.env.username

// const sequelize = new Sequelize(db ,username, password, {
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