module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cryptocurrencyId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        orderType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        amount: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    });
    return Order;
};