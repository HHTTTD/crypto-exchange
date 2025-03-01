const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({ dialect: 'sqlite', storage: 'database.sqlite' });

// แก้ไขให้ใช้ require().default ถ้ามัน export มาเป็น object
const User = require('./user')(sequelize, DataTypes);
const Wallet = require('./wallet')(sequelize, DataTypes);
const Cryptocurrency = require('./cryptocurrency')(sequelize, DataTypes);
const Order = require('./order')(sequelize, DataTypes);
const Transaction = require('./transaction')(sequelize, DataTypes);
const ExternalTransfer = require('./externalTransfer')(sequelize, DataTypes);

module.exports = { sequelize, User, Wallet, Cryptocurrency, Order, Transaction, ExternalTransfer };
