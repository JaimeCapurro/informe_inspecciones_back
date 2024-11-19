require('dotenv').config();
const { Sequelize } = require('sequelize');
const config = require('./env.config.js'); // 

//console.log(config);

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
//console.log(sequelize);
const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection has been established successfully.');
        
        await sequelize.sync({ force: false }); 
        console.log('Models synchronized with the database.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        throw error; 
    }
    };    

module.exports = 
    {sequelize,
    connectDB};
