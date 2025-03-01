const express = require('express');
const router = express.Router();
const { User } = require('../models');  

router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();  
        res.json(users);  
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

module.exports = router;
