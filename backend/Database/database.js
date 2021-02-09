const mysql = require('mysql2');

require('dotenv').config({
    path: './Configs/.env'
});

const db = mysql.createPool({
    connectionLimit : 5,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    uri: process.env.DB_URI
})

module.exports = db.promise();