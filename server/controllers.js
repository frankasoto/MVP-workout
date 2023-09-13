const { Client } = require('pg');
require('dotenv').config();


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
    //used to get the list of exercises for the modal  //////sort it by category?
    let query = 'SELECT exercise_name, category, videoLink FROM exercises';

    client.query(query)
      .then((data) => {
        res.send(data.rows);
      })
      .catch((err) => {
        console.log('err', err);
        res.sendStatus(404);
      });
}

const submitWorkout = (req, res) => {

  //take rows of data where each row is contains info on, and set info (weight/reps)
  console.log('req', req.body)
  // for (let key in req.body) {
  //   console.log('key in req', req.body[key]);
  // }
  const query = 'INSERT INTO '
}





module.exports.getExerciseList = getExerciseList;
module.exports.submitWorkout = submitWorkout;