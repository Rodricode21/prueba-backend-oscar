# PRUEBA BACKEND - Oscar Serrano

## bootstrapping instructions
- install dependencies by running `npm install`
- when running locally and on dev, run `npm run dev`
- when starting the app on prod `npm start`
- build and run a containarized instance of postgress using docker (instructions below)

### NOTES

Be aware that the Dockerfile will create the schema and tables for you automatically. As well as a few records to have Fixtures data.

Preferrably connect to the DB using a GUI or with psql, confirm the connection is achieved and run the fixtures.js script to load some initial data to the movie * option tables.

## Docker build & run container

**building container**
docker build -t my_postgres_image .

**running container**
docker run -d --name postgres_oscar -p 5432:5432 my_postgres_image
