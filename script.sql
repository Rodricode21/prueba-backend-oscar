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
  ('Avatar', 8000, '10/28/2009', 3),
  ('Frozen', 7000, '11/19/2013', 2),
  ('The Lion King', 9000, '6/15/1994', 2),
  ('Finding Nemo', 6000, '5/30/2003', 1),
  ('Toy Story', 5000, '11/22/1995', 1),
  ('The Dark Knight', 10000, '7/18/2008', 2),
  ('Jurassic World', 7500, '6/12/2015', 3),
  ('Beauty and the Beast', 8500, '3/17/2017', 2),
  ('Harry Potter and the Sorcerers Stone', 8500, '11/16/2001', 2),
  ('Transformers', 8000, '7/3/2007', 2),
  ('Pirates of the Caribbean: The Curse of the Black Pearl', 9000, '7/9/2003', 2),
  ('Finding Dory', 7000, '6/17/2016', 1),
  ('Alice in Wonderland', 7500, '3/5/2010', 2),
  ('Zootopia', 6500, '3/4/2016', 1),
  ('The Hunger Games', 6000, '3/23/2012', 2),
  ('Spider-Man', 8000, '5/3/2002', 2),
  ('The Lord of the Rings: The Fellowship of the Ring', 9000, '12/19/2001', 3),
  ('Star Wars: Episode I - The Phantom Menace', 8500, '5/19/1999', 2),
  ('Iron Man', 7000, '5/2/2008', 2),
  ('Despicable Me', 6000, '7/9/2010', 1);
  -- Add more movie records as needed


-- Insert initial records into the "option" table
INSERT INTO movies.option (name) VALUES
    ('settings'),
    ('profiles');
  -- Add more movie records as needed
