const mysql = require("mysql2");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "9038291Jr!~~",
    database: "employees"
});

module.exports = connection;