const pool = require("../db");

const createMovie = async (movie) => {
  const { name, budget, date, duration } = movie;
  const query =
    "INSERT INTO movies.movie (name, budget, date, duration) VALUES ($1, $2, $3, $4) RETURNING *";
  const values = [name, budget, date, duration];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

const getMovies = async (req) => {
  const { page = 1, limit = 10 } = req.query || {} // avoid runtime error if query was undefined
  
  const pageNumber = parseInt(page, 10);
  const limitNumber = parseInt(limit, 10);

  // Calculate the OFFSET and LIMIT values
  const offset = (pageNumber - 1) * limitNumber;

  // Execute the SQL query to get the total count
  const countQuery = `SELECT COUNT(*) FROM movies.movie`;
  const countResult = await pool.query(countQuery);
  const totalCount = parseInt(countResult.rows[0].count, 10);

  // Calculate the total number of pages
  const totalPages = Math.ceil(totalCount / limitNumber);

  // Execute the SQL query with OFFSET and LIMIT clauses
  const query = `SELECT * FROM movies.movie ORDER BY id LIMIT $1 OFFSET $2`;
  const values = [limitNumber, offset];

  const { rows } = await pool.query(query, values);

  // Send the paginated data along with pagination metadata
  return {
    movies: rows,
    totalPages,
    currentPage: pageNumber,
    totalItems: totalCount,
  }
}

module.exports = {
  createMovie,
  getMovies
};
