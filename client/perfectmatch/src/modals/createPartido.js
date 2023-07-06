import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import {  createMatch} from "../funciones/peticionesPartido"

const CrearPartido = ({ modal, toggle, save }) => {
  const [PartidoName, setPartidoName] = useState("");
  const [Description, setDescription] = useState("");
  const [SelectedOption, setSelectedOption] = useState("");
  const [SelectedOption2, setSelectedOption2] = useState("");
  const [Options2, setOptions2] = useState([]);
  const [Horario, setHorario] = useState("");
  const [integrantes, setIntegrantes] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "PartidoName") {
      setPartidoName(value);
    } else if (name === "description") {
      setDescription(value);
    } else if (name === "selectedOption") {
      setSelectedOption(value);
      setSelectedOption2("");
      if (value === "Actividad Fisica") {
        setOptions2(["Fútbol", "Vóley", "Tenis"]);
      } else if (value === "Actividad Virtual") {
        setOptions2(["Dota", "LoL", "Valorant", "Otros"]);
      } else {
        setOptions2([]);
      }
    } else if (name === "selectedOption2") {
      setSelectedOption2(value);
    } else if (name === "horario") {
      setHorario(value);
    }
    else if (name === "integrantes") {
      setIntegrantes(value);
    }
  };

  const handleSave = () => {
    const PartidoObj = {};
    PartidoObj["Name"] = PartidoName;
    PartidoObj["Description"] = Description;
    PartidoObj["SelectedOption"] = SelectedOption;
    PartidoObj["SelectedOption2"] = SelectedOption2;
    PartidoObj["Horario"] = Horario;
    PartidoObj["integrantes"] = integrantes;

    save(PartidoObj);
    createMatch(PartidoObj)
  };

  const handleFocus = (e) => {
    e.target.placeholder = "";
  };

  const handleBlur = (e) => {
    e.target.placeholder = "Escribe aquí";
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle} className="text-center">
        Crear Partido
      </ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label className="text-center">Nombre del partido</label>
            <input
              type="text"
              className="form-control"
              value={PartidoName}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="PartidoName"
              placeholder="Escribe aquí"
              maxLength={50}
            />
          </div>
          <div className="form-group">
            <label className="text-center">Horario de actividad</label>
            <input
              type="text"
              className="form-control"
              value={Horario}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="horario"
              placeholder="Escribe aquí"
            />
          </div>
          <div className="form-group d-flex">
            <div className="mr-2 flex-grow-1">
              <label className="text-center">Tipo de actividad </label>
              <select
                className="form-control"
                value={SelectedOption}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                name="selectedOption"
              >
                <option value="">Seleccionar opción</option>
                <option value="Actividad Fisica">Actividad Fisica</option>
                <option value="Actividad Virtual">Actividad Virtual</option>
              </select>
            </div>
            <div className="flex-grow-1">
              <label className="text-center">Accion a realizar</label>
              <select
                className="form-control"
                value={SelectedOption2}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                name="selectedOption2"
              >
                <option value="">Seleccionar opción</option>
                {Options2.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label className="text-center">Descripción del evento</label>
            <textarea
              rows="2"
              className="form-control"
              value={Description}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="description"
              placeholder="Escribe aquí"
              style={{ whiteSpace: "nowrap" }}
            ></textarea>
          </div>
          <div className="form-group">
            <label className="text-center">Maximo de integrantes</label>
            <input
              type="number"
              className="form-control"
              value={integrantes}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="integrantes"
              placeholder="Escribe aquí"
            />
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
          Crear
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CrearPartido;
