const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/env.config.js'); // 

const sequelize = new Sequelize(
    config.DB.database, 
    config.DB.username, 
    config.DB.password,
    {
        host: config.DB.host,
        dialect: 'mysql',
        logging: config.DB.logging,
        port: config.DB.port
    });

const Users = require('./users.model')(sequelize, DataTypes);
const Forms = require('./forms.model')(sequelize, DataTypes);

Forms.belongsTo(Users, { foreignKey: 'user_id' });
Users.hasMany(Forms, { foreignKey: 'user_id' });

module.exports = {
    Users,
    Forms
}