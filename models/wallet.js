module.exports = (sequelize, DataTypes) => {
    const Wallet = sequelize.define('Wallet', {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cryptocurrencyId: { 
            type: DataTypes.INTEGER,
            allowNull: false
        },
        balance: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0.0
        }
    });

    return Wallet;
};
