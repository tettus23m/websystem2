const express = require('express');
const server = express();
const ejs = require('ejs');
const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'node',
    password: 'websystem',
    database: 'web'
});

server.get('/', function( req, res ) {
    connection.query('select id, racename from result where year=2019;', (error, rows, fields) => {
        if( error ) {
            console.log('Query Error');
        }
        res.render( 'sql.ejs', { content: rows });
    });
});

server.listen( 80, function() {
    console.log( 'listening on port 80' );
});
