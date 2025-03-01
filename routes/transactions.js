const express = require('express');
const router = express.Router();
const { Transaction } = require('../models');  

router.get('/', async (req, res) => {
    try {
        const transactions = await Transaction.findAll();  
        res.json(transactions);  
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

module.exports = router;
