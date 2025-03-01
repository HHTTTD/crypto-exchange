const express = require('express');
const router = express.Router();
const { Order } = require('../models');

router.get('/', async (req, res) => {
    const orders = await Order.findAll();
    res.json(orders);
});

module.exports = router;