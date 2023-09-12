const express = require('express');
const path = require('path');
require('dotenv').config();
require('../database/connection.js')



const app = express();
const PORT = process.env.PORT;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());


app.listen(process.env.PORT);
console.log(`Listening at port ${PORT}`)
