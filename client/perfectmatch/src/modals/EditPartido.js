import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { PactualizarPartido , transformarJson, revertirTransformacion} from '../funciones/peticionesPartido';

const EditarPartido = ({ modal, toggle, ActualizarPartido, PartidoObj }) => {
  const [PartidoName, setPartidoName] = useState('');
  const [description, setDescription] = useState('');
  const [SelectedOption, setSelectedOption] = useState('');
  const [SelectedOption2, setSelectedOption2] = useState('');
  const [Options2, setOptions2] = useState([]);
  const [Horario, setHorario] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'PartidoName') {
      setPartidoName(value);
    } else if (name === 'description') {
      setDescription(value);
    } else if (name === 'selectedOption') {
      setSelectedOption(value);
      setSelectedOption2('');
      if (value === 'Actividad Fisica') {
        setOptions2(['Fútbol', 'Vóley', 'Tenis']);
      } else if (value === 'Actividad Virtual') {
        setOptions2(['Dota', 'LoL', 'Valorant', 'Otros']);
      } else {
        setOptions2([]);
      }
    } else if (name === 'selectedOption2') {
      setSelectedOption2(value);
    } else if (name === 'horario') {
      setHorario(value);
    }
  };

  useEffect(() => {
    setPartidoName(PartidoObj.Name);
    setDescription(PartidoObj.Description);
    setSelectedOption(PartidoObj.SelectedOption);
    setSelectedOption2(PartidoObj.SelectedOption2);
    setHorario(PartidoObj.Horario);
    if (PartidoObj.SelectedOption === 'Actividad Fisica') {
      setOptions2(['Fútbol', 'Vóley', 'Tenis']);
    } else if (PartidoObj.SelectedOption === 'Actividad Virtual') {
      setOptions2(['Dota', 'LoL', 'Valorant', 'Otros']);
    }
  }, [PartidoObj]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedPartido = {
      Name: PartidoName,
      Description: description,
      SelectedOption,
      SelectedOption2,
      Horario,
    };
    ActualizarPartido(revertirTransformacion(updatedPartido));
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Actualizar Partido</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Nombre del partido</label>
          <input type="text" className="form-control" value={PartidoName} onChange={handleChange} name="PartidoName" />
        </div>
        <div className="form-group">
          <label>Descripción del evento</label>
          <textarea rows="5" className="form-control" value={description} onChange={handleChange} name="description"></textarea>
        </div>
        <div className="form-group">
          <label>Horario</label>
          <input type="text" className="form-control" value={Horario} onChange={handleChange} name="horario" />
        </div>
        <div className="form-group d-flex">
          <div className="mr-2 flex-grow-1">
            <label>Tipo de actividad</label>
            <select className="form-control" value={SelectedOption} onChange={handleChange} name="selectedOption">
              <option value="">Seleccionar opción</option>
              <option value="Actividad Fisica">Actividad Fisica</option>
              <option value="Actividad Virtual">Actividad Virtual</option>
            </select>
          </div>
          <div className="flex-grow-1">
            <label>Accion a realizar</label>
            <select className="form-control" value={SelectedOption2} onChange={handleChange} name="selectedOption2">
              <option value="">Seleccionar opción</option>
              {Options2.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleUpdate}>
          Update
        </Button>{' '}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditarPartido;
