const express = require('express');
const router = express.Router();
const testnetcontroller = require('../controllers/testnet');



router.post('/get-address', testnetcontroller.getAddress);

router.post('/pay', testnetcontroller.pay);

router.post('/details', testnetcontroller.details);

router.post('/save', testnetcontroller.save);


router.use('/', (req,res,next) => {
    let balance = null;
    let address = null;
    let message = null;
    res.render('index', { balance: balance, address: address});
})

module.exports = router;
