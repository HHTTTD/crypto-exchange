module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Transaction', {
      walletId: {
        type: DataTypes.STRING,
        allowNull: false
      },
      amount: {
        type: DataTypes.STRING,
        allowNull: false
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false
      },
      date: {
        type: DataTypes.STRING,  
        allowNull: false,        
        defaultValue: new Date().toISOString() 
      }
    });
  };
  