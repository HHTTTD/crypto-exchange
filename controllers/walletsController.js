const { Wallet } = require('../models');

module.exports = {
  async getAll(req, res) {
    try {
      const wallets = await Wallet.findAll();
      res.json(wallets);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req, res) {
    try {
      const wallet = await Wallet.create(req.body);
      res.status(201).json(wallet);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      await Wallet.update(req.body, { where: { id: req.params.id } });
      res.json({ message: 'Wallet updated successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      await Wallet.destroy({ where: { id: req.params.id } });
      res.json({ message: 'Wallet deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
