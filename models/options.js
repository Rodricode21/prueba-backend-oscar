const pool = require('../db');

const getOptions = async () => {
  const query = 'SELECT * FROM movies.option';
  const { rows } = await pool.query(query);
  return rows;
};

module.exports = {
  getOptions,
};