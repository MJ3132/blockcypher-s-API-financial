const Sequelize = require('sequelize');
// const DB = process.env.DB;

// configuring a connection to the mysql database

//TODO change password on the empty string =======>
const sequelize = new Sequelize('markdale', 'root','password',{
    dialect: 'mysql',
    host:'localhost'

});


module.exports = sequelize