module.exports = {
    PORT: process.env.PORT,
    DB: {
        username: 'root',
        password: 'root',
        database: 'informe_camioneta',
        host: 'localhost',
        dialect: 'mysql',
        logging: false,
        timezone: "-04:00",
        port: 3306
    }
}