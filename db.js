// 
require("dotenv").config() ;
const Sequelize = require('sequelize');

// Initialize Sequelize


const database = process.env.DB ;
const user = process.env.USERNAME ;
const password = process.env.PASSWORD ;


const sequelize = new Sequelize("postgres" , "postgres" , password, {
  host: process.env.HOSTNAME,
  dialect: 'postgres', // specify the dialect
  port: 5432, // default PostgreSQL port
});

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