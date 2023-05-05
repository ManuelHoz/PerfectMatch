const {Router} = require('express');
const pool = require('../db');

const router= Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});

//CRUD DE LOS PARTIDOS

router.get('/partidos', (req, res) => {
    res.send('retornando partidos');
});

router.get('/partidos/10', (req, res) => {
    res.send('retornando partido');
});

router.post('/partidos', (req, res) => {
    res.send('creando partidos');
});

router.delete('/partidos', (req, res) => {
    res.send('borrando partidos');
});

router.put('/partidos', (req, res) => {
    res.send('actualizando partidos');
});
module.exports = router;