const express = require('express');
const path = require('path');
require('dotenv').config();

const routes = require('./routes');
const PORT = process.env.PORT;


const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/', routes);

app.listen(process.env.PORT);
console.log(`Listening at port ${PORT}`)
