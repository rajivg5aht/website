const express = require('express');
const { connection } = require('./config/db');
const app = express();

connection();



app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
    });