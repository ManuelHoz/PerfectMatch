import axios from 'axios';

export async function PcrearPartido(partido) {
  try {
    const response = await axios.post('http://localhost:4000/partido/', partido);
  } catch (error) {
  }
}

export async function PborrarPartido(index) {
  try {
    const response = await axios.delete(`http://localhost:4000/partido/${index}`);    
  } catch (error) {
  }
}

export async function PactualizarPartido(id, partido) {
  try {
    const response = await axios.put(`http://localhost:4000/partido/${id}`, partido);
    // Manejar la respuesta según sea necesario
  } catch (error) {
    // Manejar el error según sea necesario
  }
}

export async function PobtenerPartidos() {
  try {
    const response = await axios.get('http://localhost:4000/partido/');
    //convertir todos los json al otro formato
    const partidos = response.data.map((partido) => {
      return revertirTransformacion(partido);
    });
    return partidos;
  } catch (error) {
  }
}

export function transformarJson(json) {
  const nuevoJson = {
    NombreDelPartido: json.Name,
    DescripcionDelEvento: json.Description,
    capacidadMaxima: json.integrantes,
    HorarioDeActividad: json.Horario,
    TipoDeActividad: json.SelectedOption,
    AccionARealizar: json.SelectedOption2,
    CreadorPorNickname: json.user
  };
  
  return nuevoJson;
}

export function revertirTransformacion(json) {
  const nuevoJson = {
    Name: json.NombreDelPartido,
    Description: json.DescripcionDelEvento,
    SelectedOption: json.TipoDeActividad,
    SelectedOption2: json.AccionARealizar,
    Horario: json.HorarioDeActividad,
    integrantes: json.capacidadMaxima,
    user: json.CreadorPorNickname
  };
  
  return nuevoJson;
}


