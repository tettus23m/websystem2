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
    connection.query('select id, pople from people order by count('pople_id1');', (error, rows, fields) => {
        if( error ) {
            console.log('Query Error');
        }
        res.render( 'player_record.ejs', { content: rows });
    });
});

server.listen( 80, function() {
    console.log( 'listening on port 80' );
});
