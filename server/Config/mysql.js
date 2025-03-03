require('dotenv').config();
const mysql2 = require("mysql2");

const dataBase = mysql2.createConnection({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

dataBase.connect((error) => {
    if (error) throw error;
    console.log("connection établie");
});

module.exports = dataBase;