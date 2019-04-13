//package
const Sequelize = require('sequelize');
// db connection
const sequelize = require('../util/dbConnection');


const Transaction = sequelize.define('transaction',{
    // id:{
    //     type: Sequelize.INTEGER,
    //     autoIncrement: true,
    //     allowNull: false,
    //     primaryKey: true
    // },

    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    balance: {
        type: Sequelize.STRING,
        allowNull: false
    },
    totalReceived: {
        type: Sequelize.STRING,
        allowNull: false
    },
    totalSent: {
        type: Sequelize.STRING,
        allowNull: false
    },
    finalBalance: {
        type: Sequelize.STRING,
        allowNull: false
    },

});



module.exports = Transaction;
