//CRUD EVENTO

const pool = require("../db");

const getEventos= async (req, res) => {
    res.send('mostarndo eventos');

};

const getEvento= async (req, res) => {
    res.send('mostarndo evento por id');
}

const createEvento= async (req, res) => {
    /*
    CREATE TABLE evento(
        id SERIAL PRIMARY KEY,
        titulo VARCHAR(100) NOT NULL,
        descripcion VARCHAR(255),
        capacidad_de_personas INT NOT NULL
    );
    */
    const evento = req.body;
    pool.query(
        'INSERT INTO evento (titulo, descripcion, capacidad_de_personas) VALUES ($1, $2, $3)', 
        [evento.titulo, 
        evento.descripcion, 
        evento.capacidad_de_personas]);
    res.send('creando evento');
}

const deleteEvento= async (req, res) => {
    res.send('borrando evento');
}

const updateEvento= async (req, res) => {
    res.send('actualizando evento');
}

//CRUD MATCHER

const getMatchers= async (req, res) => {
    res.send('mostarndo matches');
}

const getMatcher= async (req, res) => {
    res.send('mostarndo matcher por id');
}

const createMatcher= async (req, res) => {
    res.send('creando matcher');
}

const deleteMatcher= async (req, res) => {
    res.send('borrando matcher');
}

const updateMatcher= async (req, res) => {
    res.send('actualizando matcher');
}


module.exports = {
    getEventos,
    getMatchers,
    getEvento,
    getMatcher,
    createEvento,
    createMatcher,
    deleteEvento,
    deleteMatcher,
    updateEvento,
    updateMatcher

}