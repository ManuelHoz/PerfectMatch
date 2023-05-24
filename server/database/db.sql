CREATE DATABASE taskdb;

CREATE TABLE partido(
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    descripcion VARCHAR(255)
);