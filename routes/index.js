const express = require('express');
const router = express.Router();
const ordersRoute = require('./orders');
const usersRoute = require('./users'); 
const walletsRoute = require('./wallets'); 
const transactionsRoute = require('./transactions'); 

router.use('/orders', ordersRoute);
router.use('/users', usersRoute);
router.use('/wallets', walletsRoute);  
router.use('/transactions', transactionsRoute);  

module.exports = router;
