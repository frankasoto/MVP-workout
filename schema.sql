CREATE DATABASE workouts;


\c workouts;

CREATE TABLE IF NOT EXISTS exercises (
exercise_name TEXT UNIQUE,
category TEXT,
videoLink TEXT
);

CREATE TABLE IF NOT EXISTS workoutEntry (
  id SERIAL UNIQUE,
  exercise_name TEXT,
  info JSONB,  -- in format of {set#: {weight: ? reps: ?}, set#: ...} for one exercise
  date_completed DATE NOT NULL,
  FOREIGN KEY(exercise_name) REFERENCES exercises(exercise_name)
);


COPY exercises (exercise_name, category, videoLink)
FROM '/home/frankasoto/MVP-workout/data/exercises.csv'
DELIMITER ','
CSV HEADER