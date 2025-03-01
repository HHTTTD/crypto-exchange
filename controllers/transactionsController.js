const { Transaction } = require('../models');

module.exports = {
  async getAll(req, res) {
    try {
      const transactions = await Transaction.findAll();
      res.json(transactions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req, res) {
    try {
      const transaction = await Transaction.create(req.body);
      res.status(201).json(transaction);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      await Transaction.update(req.body, { where: { id: req.params.id } });
      res.json({ message: 'Transaction updated successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      await Transaction.destroy({ where: { id: req.params.id } });
      res.json({ message: 'Transaction deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
