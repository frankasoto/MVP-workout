require('dotenv').config();
const express = require('express');

const controllers = require('./controllers.js');
const router = express.Router();





router.get('/exercises', controllers.getExerciseList);
router.post('/exercises',controllers.submitWorkout);
router.get('/exercises/dates', controllers.getDates);
router.get('/exercises/dates/:date', controllers.getWorkoutData);
router.get('/exercises/video', controllers.videoFetch)

module.exports = router;