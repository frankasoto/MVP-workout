const { Client } = require('pg');
require('dotenv').config();
const format = require('date-fns/format')

const client = new Client({
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  port: process.env.PG_PORT
});


client.connect()
  .then(() => console.log('connected successfully'))
  .catch((err) => console.log(err));


const getExerciseList = (req, res) => {

  let search = req.url.split('=')[1];
  if (search === '' || search === 'reset%20filter') {
    let query = 'SELECT exercise_name, category, videoLink FROM exercises';

    client.query(query)
      .then((data) => {
        res.send(data.rows);
      })
      .catch(() => {

        res.sendStatus(404);
      });
  } else {
    let query = `SELECT exercise_name, category, videoLink FROM exercises WHERE category='${search}'`;
    client.query(query)
      .then((results) => {

        res.send(results.rows)
      })
      .catch(() => res.sendStatus(404));

  }
    //used to get the list of exercises for the modal  //////sort it by category?
}

const submitWorkout = (req, res) => {

  //take rows of data where each row is contains info on, and set info (weight/reps)

  const query = 'INSERT INTO workoutEntry(exercise_name, info, date_completed) values($1, $2, $3)'
  req.body.forEach((exercise) => {
    let dataEntry = [];
    dataEntry[0] = exercise.name;
    dataEntry[1] = JSON.stringify(exercise.entry);
    dataEntry[2] = format(new Date(), 'yyyy-MM-dd');

    client.query(query, dataEntry)
    .catch(() => res.sendStatus(404));
  })
  res.sendStatus(201);
}


const getDates = (req, res) => {

  const query = `SELECT DISTINCT date_completed FROM workoutEntry`;

  client.query(query)
    .then((data) => res.send(data.rows))
    .catch(() => res.sendStatus(404));
}

const getWorkoutData = (req, res) => {

  let date = req.params.date;
  const query = `SELECT * FROM workoutEntry WHERE date_completed='${date}'`
  client.query(query)
    .then((results) => res.send(results.rows))
    .catch(() => res.sendStatus(404));
}

const videoFetch = (req, res) => {
  let videoName = req.query.name;

  const query = `SELECT videoLink FROM exercises WHERE exercise_name=${videoName}`;

  client.query(query)
    .then((results) => res.send(results.rows))
    .catch(() => res.sendStatus(404));
}


const graphData = (req, res) => {
  let name = req.query.name;

  const query = `SELECT info, date_completed FROM workoutEntry WHERE exercise_name='${name}'`;

  client.query(query)
    .then((results) => {
      let result = [];

      results.rows.forEach((value) => {
        let sum = 0;
        let counter = 0;
        let obj = {};
        value.info.forEach((entry, index) => {

          sum += Number(entry[index + 1].weight)
          counter += 1;

        })
        obj['average_weight'] = sum / counter;
        obj['date_completed'] = format(value.date_completed, 'MM-dd');

        result.push(obj);

      })

      res.send(result)
    })
    .catch(() => res.sendStatus(404));


}


module.exports.getExerciseList = getExerciseList;
module.exports.submitWorkout = submitWorkout;
module.exports.getDates = getDates;
module.exports.getWorkoutData = getWorkoutData;
module.exports.videoFetch = videoFetch;
module.exports.graphData = graphData;