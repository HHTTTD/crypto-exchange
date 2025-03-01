module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Wallets', [
      {
        userId: 1,
        cryptocurrencyId: 1,
        balance: 1000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        cryptocurrencyId: 2,
        balance: 2000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Wallets', null, {});
  }
};
