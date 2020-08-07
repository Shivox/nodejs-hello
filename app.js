const express = require('express');
const app = express();
const mysql = require('mysql');

const hostname = '0.0.0.0';
const port = 8080;

const dbHostname = process.env.DB_HOSTNAME;
const dbUser = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

const connection = mysql.createConnection({
    host: dbHostname,
    user: dbUser,
    password: dbPassword,
    database: dbName
});

// Connect to MySQL server
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Server!');
});


app.get("/",(req,res) => {
    connection.query('SELECT * from data LIMIT 1', (err, rows) => {
        if(err) throw err;
        res.send(rows[0]['value']);
    });
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});