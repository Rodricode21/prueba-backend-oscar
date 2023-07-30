const Movies = require('../models/movies');

const createMovie = async (req, res) => {
  try {
    const movie = await Movies.createMovie(req.body);
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la película' });
  }
};

const getMovies = async (req, res) => {
  try {
    const movies = await Movies.getMovies(req);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Error while fetching the movies' });
  }
}

module.exports = {
  createMovie,
  getMovies
};