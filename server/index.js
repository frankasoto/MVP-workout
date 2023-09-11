const express = require('express');
const path = require('path');
require('dotenv').config();



const app = express();
const PORT = process.env.PORT;

// console.log('path is:', path.join(__dirname, '../client/dist'))
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());


app.listen(process.env.PORT);
console.log(`Listening at port ${PORT}`)
