module.exports = (sequelize, DataTypes) => {
    const Cryptocurrency = sequelize.define('Cryptocurrency', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        symbol: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    });
    return Cryptocurrency;
};