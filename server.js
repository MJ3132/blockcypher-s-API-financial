const express = require('express');
const app = express();
const routes = require('./routes/routes');
const sequelize = require('./util/dbConnection');
const Sequelize = require('sequelize');
const path = require('path');

const bodyParser = require("body-parser");
const ejs = require('ejs');
require('dotenv').config();
var PORT = process.env.PORT || 3000;

// token security
const port = process.env.PORT;

// setting middleware to parse incoming json info
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// setting ejs templating engine
app.set('view engine', 'ejs')
app.set('views', 'views');


// connecting to our routes
app.use(routes);

// creating a database
sequelize.query("CREATE DATABASE markdale; USE markdale")
.then(() => {
    console.log('database has been created!')
}).catch((err) => {
    console.log('error ' + err)

// connecting our models to the database
});
sequelize
    .sync({force:true})
    .then(result => {
        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`);
        })
    })
    .catch(err => {
        console.log(err)
    });



