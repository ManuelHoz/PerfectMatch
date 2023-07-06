
import React, { useEffect, useState } from "react";
import CrearPartido from "../modals/createPartido";
import Card from "./Card";
import { PcrearPartido , PborrarPartido, transformarJson, revertirTransformacion, PobtenerPartidos} from "../funciones/peticionesPartido";

const ListaDePartidos = () => {
  const [modal, setModal] = useState(false);
  const [ListaPartidos, SetListaPartidos] = useState([]);
  const toggle = () => {
    setModal(!modal);
  };

  useEffect(() => {
    const obtenerPartidos = async () => {
      try {
        const partidos = await PobtenerPartidos();
        SetListaPartidos(partidos);
        console.log(partidos);
      } catch (error) {
        console.error("Error al obtener los partidos:", error);
      }
    };
  
    obtenerPartidos();
  }, []);
  const BorrarPartido = async (index) => {
    try {
      await PborrarPartido(ListaPartidos[index].id);
      const tempList = [...ListaPartidos];
      tempList.splice(index, 1);
      SetListaPartidos(tempList);
      window.location.reload();
    } catch (error) {
      console.error("Error al borrar el partido:", error);
    }
  };

  const actualizarListaenArreglo = (obj, index) => {
    let tempList = [...ListaPartidos];
    tempList[index] = obj;
    SetListaPartidos(tempList);
    window.location.reload();
  };

  /*hay que agregarle la api a esta*/

  const guardarPartido = async (PartidoObj) => {
    const jsonBackend = transformarJson(PartidoObj);
    try {
      await PcrearPartido(jsonBackend);
      const tempList = [...ListaPartidos];
      tempList.push(PartidoObj);
      SetListaPartidos(tempList);
      setModal(false);
    } catch (error) {
      console.error("Error al guardar el partido:", error);
    }
  };

  /*hay que agregarle la api a esta*/

  return (
    <>
      <div className="header text-center">
        <h3>Lista de Partidos</h3>
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
          Crear Partido
        </button>
      </div>
      <div className="task-container">
        {ListaPartidos &&
          ListaPartidos.map((obj, index) => (
            <Card
              PartidoObj={obj}
              index={index}
              BorrarPartido={BorrarPartido}
              actualizarListaenArreglo={actualizarListaenArreglo}
            />
          ))}
      </div>
      <CrearPartido toggle={toggle} modal={modal} save={guardarPartido} />
    </>
  );
};

export default ListaDePartidos;
