const mysql = require('mysql');

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: "root",
    password: "system",
    database: "RegDetails",
    port: 3306
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database.');
});

module.exports = db;
