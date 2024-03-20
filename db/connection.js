const mysql = require("mysql2");

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "fernando",
        database: "employees",
    },
    console.log("Connected to the Employee DB")
);

module.exports =db;