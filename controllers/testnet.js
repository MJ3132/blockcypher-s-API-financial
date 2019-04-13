const axios = require('axios');
const Sequelize = require('sequelize');
const addressDb = require('../models/address');
const TOKEN = process.env.TOKEN;
// get coins from the testfaucet

module.exports.getAddress = (req, res, next) => {
    // let address = req.body.address;

    console.log(req.body);


    if (req.body.address) {
        address = req.body.address;
    } else {
        address = "2NGZrVvZG92qGYqzTLjCAewvPZ7JE8S8VxE"
    }

    axios.get(`https://api.blockcypher.com/v1/btc/test3/addrs/${address}`).then(response => {
        console.log(response);

        const transactions = response.data.txrefs[0];
        const balance = response.data.balance;
        //  console.log(balance);

        //  console.log(transactions)
        res.render('index', { balance: balance, address: address });

    })
        .catch(err => {
            console.log(err);
        })
}

module.exports.pay = (req, res, next) => {
    let bitcoin;
    let address = "2NGZrVvZG92qGYqzTLjCAewvPZ7JE8S8VxE";

    if (req.body.address && req.body.payment) {
        address = req.body.address;
        bitcoin = req.body.payment;
    } else {
        return
    }

    let data = { "address": address, "amount": bitcoin };
    axios.post(`https://api.blockcypher.com/v1/btc/test3/faucet?token=${TOKEN}`, JSON.stringify(data))
        .then((response) => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        })
    res.redirect('/')
}


module.exports.details = (req, res, next) => {
    let address;

    if (req.body.address) {
        address = req.body.address;
    } else {
        address = "2NGZrVvZG92qGYqzTLjCAewvPZ7JE8S8VxE"
    }
    axios.get(`https://api.blockcypher.com/v1/btc/test3/addrs/${address}`).then(response => {
        console.log(response);

        let transactions = response.data;
        const balance = response.data.balance;
        const totalReceived = response.data.total_received;
        const totalSent = response.data.total_sent;
        const finalBalance = response.data.final_balance;


        res.render('chart', {
            address: address,
            balance: balance,
            totalReceived: totalReceived,
            totalSent: totalSent,
            finalBalance: finalBalance
        });


    })
        .catch(err => {
            console.log(err);
        })

}


module.exports.save = (req, res, next) => {

    console.log(req.body);
    let { address,
        balance,
        totalReceived,
        totalSent,
        finalBalance } = req.body;


    let data = {
        address: address,
        balance: balance,
        totalReceived: totalReceived,
        totalSent: totalSent,
        finalBalance: finalBalance
    }

    // console.log(data);

    addressDb.create(data)
        .then(response => {
            console.log(response);
            res.render('saved');
        })
        .catch(err => {
            console.log(err);
        })

}


