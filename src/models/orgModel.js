const {DataTypes} = require("sequelize");
const sequelize = require("../db") ;

const Org = sequelize.define("Org" , {
    name : {
        type : DataTypes.STRING ,
        allowNull : false 
    }
}) ;

module.exports = Org ;