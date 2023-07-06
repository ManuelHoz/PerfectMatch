const axios = require('axios');

const getPartidos = async () => {
  try {
    const response = await axios.get('http://localhost:3000/partido');
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener los partidos');
  }
};


const getPartidoById = async (partidoId) => {
  try {
    const response = await axios.get(`http://localhost:3000/partido/${partidoId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener el partido');
  }
};

// Función para crear un partido
const createPartido = async (partidoData) => {
  try {
    const response = await axios.post('http://localhost:3000/partido', partidoData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Error al crear el partido');
  }
};


const updatePartido = async (partidoId, partidoData) => {
  try {
    const response = await axios.put(`http://localhost:3000/partido/${partidoId}`, partidoData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Error al actualizar el partido');
  }
};


const deletePartido = async (partidoId) => {
  try {
    await axios.delete(`http://localhost:3000/partido/${partidoId}`);
    console.log('Partido eliminado exitosamente');
  } catch (error) {
    console.error(error);
    throw new Error('Error al eliminar el partido');
  }
};

module.exports = {
  getPartidos,
  getPartidoById,
  createPartido,
  updatePartido,
  deletePartido,
};
