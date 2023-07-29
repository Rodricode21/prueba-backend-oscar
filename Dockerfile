# Use the official PostgreSQL image from Docker Hub
FROM postgres:latest

# Set environment variables for PostgreSQL
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=mysecretpassword
ENV POSTGRES_DB=movies

# Expose port 5432 for PostgreSQL
EXPOSE 5432

# Copy the SQL script into the container
COPY ./script.sql /docker-entrypoint-initdb.d/

# The script in /docker-entrypoint-initdb.d/ will be executed when the container starts
