module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Orders', [
          {
              userId: 1,
              cryptocurrencyId: 2,
              orderType: 'buy',
              amount: 10.5,
              price: 50000,
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              userId: 2,
              cryptocurrencyId: 3,
              orderType: 'sell',
              amount: 5.0,
              price: 40000,
              createdAt: new Date(),
              updatedAt: new Date()
          }
      ]);
  },
  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Orders', null, {});
  }
};
