const http = require('http');
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

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Server!');
});

//connection.query('');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});