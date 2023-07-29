-- Create the new schema
CREATE SCHEMA IF NOT EXISTS movies;

-- Script para crear la tabla "películas"
CREATE TABLE IF NOT EXISTS movies.movie (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  budget INTEGER NOT NULL,
  date VARCHAR(255) NOT NULL,
  duration INTEGER NOT NULL
);

-- Script para crear la tabla "opciones"
CREATE TABLE IF NOT EXISTS movies.option (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);


-- CREATING FIXTURES DATA

-- Insert initial records into the "movie" table
INSERT INTO movies.movie (name, budget, date, duration) VALUES
    ('Titanic', 5000, '9/16/1997', 2),
    ('Avengers', 6000, '9/16/2012', 4),
    ('Jurasic Park', 7000, '9/16/2001', 6),
    ('The Incredibles', 5000, '9/16/2004', 2),
    ('Stuart Little', 2023, '5/20/2000', 1);
    -- Add more movie records as needed

-- Insert initial records into the "option" table
INSERT INTO movies.option (name) VALUES
    ('settings'),
    ('profiles');
