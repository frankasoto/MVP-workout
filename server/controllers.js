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

module.exports.getExerciseList = getExerciseList;