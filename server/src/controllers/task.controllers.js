//CRUD EVENTO

const getEventos= async (req, res) => {
    res.send('mostarndo eventos');

};

const getEvento= async (req, res) => {
    res.send('mostarndo evento por id');
}

const createEvento= async (req, res) => {
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