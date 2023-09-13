CREATE DATABASE workouts;


\c workouts;

CREATE TABLE IF NOT EXISTS exercises (
id SERIAL UNIQUE,
exercise_name TEXT,
category TEXT,
videoLink TEXT
);

-- CREATE TABLE IF NOT EXISTS sets (
--   id SERIAL UNIQUE,
--   weight SMALLINT,
--   reps SMALLINT
-- );


CREATE TABLE IF NOT EXISTS workoutEntry (
  id SERIAL UNIQUE,
  exercise_id SMALLINT,
  set_id JSONB,  -- in format of {set#: {weight: ? reps: ?}, set#: ...} for one exercise
  date_completed DATE NOT NULL DEFAULT CURRENT_DATE,
  FOREIGN KEY(exercise_id) REFERENCES exercises(id)
);


COPY exercises (id, exercise_name, category, videoLink)
FROM '/home/frankasoto/MVP-workout/data/exercises.csv'
DELIMITER ','
CSV HEADER