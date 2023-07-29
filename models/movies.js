const pool = require("../db");

const createMovie = async (movie) => {
  const { name, budget, date, duration } = movie;
  const query =
    "INSERT INTO movies.movie (name, budget, date, duration) VALUES ($1, $2, $3, $4) RETURNING *";
  const values = [name, budget, date, duration];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

const getMovies = async () => {
  // TODO: implement pagination
  const query = 'SELECT * FROM movies.movie'
  const { rows } = await pool.query(query);

  return rows;
}

module.exports = {
  createMovie,
  getMovies
};
