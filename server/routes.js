require('dotenv').config();
const express = require('express');

const controllers = require('./controllers.js');
const router = express.Router();





router.get('/exercises', controllers.getExerciseList)


module.exports = router;