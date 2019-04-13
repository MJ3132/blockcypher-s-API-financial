const Sequelize = require('sequelize');


// configuring a connection to the mysql database
const sequelize = new Sequelize('markdale', 'root', 'password',{
    dialect: 'mysql',
    host:'localhost'

});


module.exports = sequelize