import React, { useEffect, useState } from "react";
import CrearPartido from "../modals/createPartido";
import Card from "./Card";

const ListaDePartidos = () => {
  const [modal, setModal] = useState(false);
  const [ListaPartidos, SetListaPartidos] = useState([]);
  const toggle = () =>{
     setModal(!modal);
    }

  useEffect(() => {
    let arr = localStorage.getItem("ListaPartidos");
    if (arr) {
      let obj = JSON.parse(arr);
      SetListaPartidos(obj);
      console.log(obj);
      console.log(obj);
    }
  }, []);
  const BorrarPartido = (index) => {
    let tempList = ListaPartidos;
    tempList.splice(index, 1);
    localStorage.setItem("ListaPartidos", JSON.stringify(tempList));
    SetListaPartidos(tempList);
    window.location.reload();
  };

  const  actualizarListaenArreglo = (obj, index) => {
    let tempList = ListaPartidos;
    tempList[index] = obj;
    localStorage.setItem("ListaPartidos", JSON.stringify(tempList));
    SetListaPartidos(tempList);
    window.location.reload();
  };

  const guardarPartido = (PartidoObj) => {
    let tempList = ListaPartidos;
    tempList.push(PartidoObj);
    localStorage.setItem("ListaPartidos", JSON.stringify(tempList));
    SetListaPartidos(tempList);
    setModal(false);
  };

  return (
    <>
      <div className="header text-center">
        <h3>Lista de Partidos</h3>
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
          Crear Partido
        </button>
      </div>
      <div className="task-container">
        {ListaPartidos && ListaPartidos.map((obj, index) => (
          <Card PartidoObj={obj} index={index} BorrarPartido={BorrarPartido} actualizarListaenArreglo={ actualizarListaenArreglo} />
        ))}
      </div>
      <CrearPartido toggle={toggle} modal={modal} save={guardarPartido} />
    </>
  );
};

export default ListaDePartidos;
