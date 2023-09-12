CREATE DATABASE workouts;


\c workouts;

CREATE TABLE IF NOT EXISTS exercises (
id SERIAL UNIQUE,
exercise_name TEXT,
videoLink TEXT
);

CREATE TABLE IF NOT EXISTS sets (
  id SERIAL UNIQUE,
  weight SMALLINT,
  reps SMALLINT
);


CREATE TABLE IF NOT EXISTS sets (
  id SERIAL UNIQUE,
  exercise_id SMALLINT,
  set_id SMALLINT,
  date_completed DATE NOT NULL DEFAULT CURRENT_DATE,
  FOREIGN KEY(set_id) REFERENCES sets(id),
  FOREIGN KEY(exercise_id) REFERENCES exercises(id)
);