const express = require("express");
var cors = require("cors");
const moviesController = require("./controllers/moviesController");
const optionsController = require("./controllers/optionsController");
const app = express();
const port = 3010;

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
app.get('/api/test', moviesController.testController);

// Rutas para opciones
app.get("/api/options", optionsController.getOptions);

app.listen(port, () => {
  console.log(`API iniciada en http://localhost:${port}`);
});
