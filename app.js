const express = require("express");
var cors = require("cors");
const moviesController = require("./controllers/moviesController");
const optionsController = require("./controllers/optionsController");
const app = express();
const port = process.env.PORT || 3010;


// load environment variables
const dotenv = require("dotenv");
dotenv.config();

const corsOpts = {
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOpts));

app.use(express.json());


// Rutas para películas
app.post("/api/movies", moviesController.createMovie);
app.get("/api/movies", moviesController.getMovies);

// Rutas para opciones
app.get("/api/options", optionsController.getOptions);

app.listen(port, '0.0.0.0', () => {
  console.log(`API iniciada en http://0.0.0.0:${port}`);
});
