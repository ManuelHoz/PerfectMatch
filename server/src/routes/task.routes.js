const {Router} = require('express');
const pool = require('../db');
const { getEventos }= require('../controllers/task.controllers');

const router= Router();

router.get('/', (req, res) => {
    res.send('Bienvenido al servidor de PerfectMatch');
});

//CRUD DE LOS PARTIDOS

router.get('/eventos', getEventos);

router.get('/eventos/', (req, res) => {
    res.send('retornando evento');
});

router.post('/eventos', (req, res) => {
    res.send('creando eventos');
});

router.delete('/eventos', (req, res) => {
    res.send('borrando eventos');
});

router.put('/eventos', (req, res) => {
    res.send('actualizando eventos');
});
module.exports = router;