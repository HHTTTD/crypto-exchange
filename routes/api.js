const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const transactionsController = require('../controllers/transactionsController');
const walletsController = require('../controllers/walletsController');
const ordersController = require('../controllers/ordersController');

// Users
router.get('/users', usersController.getAll);
router.post('/users', usersController.create);
router.put('/users/:id', usersController.update);
router.delete('/users/:id', usersController.delete);

// Transactions
router.get('/transactions', transactionsController.getAll);
router.post('/transactions', transactionsController.create);
router.put('/transactions/:id', transactionsController.update);
router.delete('/transactions/:id', transactionsController.delete);

// Wallets
router.get('/wallets', walletsController.getAll);
router.post('/wallets', walletsController.create);
router.put('/wallets/:id', walletsController.update);
router.delete('/wallets/:id', walletsController.delete);

// Orders
router.get('/orders', ordersController.getAll);
router.post('/orders', ordersController.create);
router.put('/orders/:id', ordersController.update);
router.delete('/orders/:id', ordersController.delete);

module.exports = router;
