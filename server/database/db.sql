CREATE DATABASE partidosdb;

CREATE TABLE evento(
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    descripcion VARCHAR(255),
    capacidad_de_personas INT NOT NULL
);

CREATE TABLE PerfectMatcher(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    username VARCHAR(100) NOT NULL,
    contraseña VARCHAR(100) NOT NULL
);

CREATE TABLE evento_perfectmatcher(
    id SERIAL PRIMARY KEY,
    id_evento INT NOT NULL,
    id_perfectmatcher INT NOT NULL,
    FOREIGN KEY (id_evento) REFERENCES evento(id),
    FOREIGN KEY (id_perfectmatcher) REFERENCES PerfectMatcher(id)
);

CREATE TABLE admin(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    username VARCHAR(100) NOT NULL,
    contraseña VARCHAR(100) NOT NULL
);
