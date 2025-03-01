const express = require('express');
const router = express.Router();
const { Wallet } = require('../models');  

router.get('/', async (req, res) => {
    try {
        const wallets = await Wallet.findAll(); 
        res.json(wallets); 
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

module.exports = router;
