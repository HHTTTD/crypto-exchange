module.exports = (sequelize, DataTypes) => {
    const ExternalTransfer = sequelize.define('ExternalTransfer', {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        walletId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        amount: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        destinationAddress: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    });
    return ExternalTransfer;
};
