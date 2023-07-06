
import React, { useState, useRef, useEffect } from 'react';
import EditTask from '../modals/EditPartido.js';
import { transformarJson, revertirTransformacion, PborrarPartido, PactualizarPartido } from '../funciones/peticionesPartido.js';

const Card = ({ PartidoObj, index, BorrarPartido, actualizarListaenArreglo }) => {
  const [modal, setModal] = useState(false);
  const cardRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(null);

  const colors = [
    {
      primaryColor: '#5D93E1',
      secondaryColor: '#ECF3FC'
    },
    {
      primaryColor: '#F9D288',
      secondaryColor: '#FEFAF1'
    },
    {
      primaryColor: '#5DC250',
      secondaryColor: '#F2FAF1'
    },
    {
      primaryColor: '#F48687',
      secondaryColor: '#FDF1F1'
    },
    {
      primaryColor: '#B964F7',
      secondaryColor: '#F3F0FD'
    }
  ];

  const toggle = () => {
    setModal(!modal);
  };

  const ActualizarPartido = (obj) => {
    const jsonBackend = transformarJson(obj);
    PactualizarPartido(obj.id, jsonBackend);
    actualizarListaenArreglo(obj, index);

    
  };

  const handleBorrar = () => {
    BorrarPartido(index);
  };

  useEffect(() => {
    if (cardRef.current) {
      const { width } = cardRef.current.getBoundingClientRect();
      setContainerWidth(width);
    }
  }, []);

  return (
    <div className="card-wrapper" style={{ width: containerWidth, height: '400px', overflowY: 'auto', marginRight: '20px', marginBottom: '20px' }} ref={cardRef}>
      <div className="card-top" style={{ backgroundColor: colors[index % 5].primaryColor, width: '100%' }}></div>
      <div className="task-holder" style={{ marginTop: '10px', marginBottom: '10px' }}>
        <span
          className="card-header my-card-header" // Clase personalizada para el CardHeader
          style={{
            backgroundColor: colors[index % 5].secondaryColor,
            borderRadius: '10px',
            overflow: 'hidden',
            whiteSpace: 'pre-wrap'
          }}
        >
          {PartidoObj.Name}
        </span>
        
        <p className="mt-3">
          Horario: {PartidoObj.Horario}
        </p>
        
        {PartidoObj.SelectedOption && (
          <p className="mt-20">{PartidoObj.SelectedOption}</p>
        )}
        
        <p className="mt-20">
          Tipo: {PartidoObj.SelectedOption2}
        </p>
        
        <p className="mt-200">
          Descripcion: {PartidoObj.Description}
        </p>
        <p className="mt-20">
          Integrantes: {PartidoObj.integrantes}
        </p>
        <div style={{ position: 'absolute', right: '20px', bottom: '20px' }}>
          <i
            className="far fa-edit mr-3"
            style={{ color: colors[index % 5].primaryColor, cursor: 'pointer' }}
            onClick={() => setModal(true)}
          ></i>
          <i
            className="fas fa-trash-alt"
            style={{ color: colors[index % 5].primaryColor, cursor: 'pointer' }}
            onClick={handleBorrar}
          ></i>
        </div>
      </div>
      <EditTask modal={modal} toggle={toggle} ActualizarPartido={ActualizarPartido} PartidoObj={PartidoObj} />
    </div>
  );
};

export default Card;
