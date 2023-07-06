import axios from "axios"

const axios = require('axios');

const getDeportistas = async () => {
  try {
    const response = await axios.get('http://localhost:3000/deportista');
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener los deportistas');
  }
};

const createDeportista = async (deportistaData) => {
  try {
    const response = await axios.post('http://localhost:3000/deportista', deportistaData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Error al crear el deportista');
  }
};

const loginDeportista = async (credentials) => {
  try {
    const response = await axios.post('http://localhost:3000/login/deportista', credentials);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Error al realizar el login del deportista');
  }
};

const getPartidosByDeportista = async (deportistaId) => {
  try {
    const response = await axios.get(`http://localhost:3000/deportista/${deportistaId}/partidos`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener los partidos del deportista');
  }
};

module.exports = {
  getDeportistas,
  createDeportista,
  loginDeportista,
  getPartidosByDeportista,
};
