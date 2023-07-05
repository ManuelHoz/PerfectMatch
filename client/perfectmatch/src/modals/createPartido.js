import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CrearPartido = ({ modal, toggle, save }) => {
  const [PartidoName, setPartidoName] = useState("");
  const [Description, setDescription] = useState("");
  const [SelectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "PartidoName") {
      setPartidoName(value);
    } else if (name === "description") {
      setDescription(value);
    } else if (name === "selectedOption") {
      setSelectedOption(value);
    }
  };

  const handleSave = () => {
    const PartidoObj = {};
    PartidoObj["Name"] = PartidoName;
    PartidoObj["Description"] = Description;
    PartidoObj["SelectedOption"] = SelectedOption;
    save(PartidoObj);
  };

  const handleFocus = (e) => {
    e.target.placeholder = "";
  };

  const handleBlur = (e) => {
    e.target.placeholder = "Escribe aquí";
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle} className="text-center">Crear Partido</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label className="text-center">Nombre del Partido</label>
            <input
              type="text"
              className="form-control"
              value={PartidoName}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="PartidoName"
              placeholder="Escribe aquí"
            />
          </div>
          <div className="form-group">
            <label className="text-center">Descripción del evento</label>
            <textarea
              rows="5"
              className="form-control"
              value={Description}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="description"
              placeholder="Escribe aquí"
            ></textarea>
          </div>
          <div className="form-group">
            <label className="text-center">¿De qué sera el evento?</label>
            <select
              className="form-control"
              value={SelectedOption}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="selectedOption"
            >
              <option value="">Seleccionar opción</option>
              <option value="Fútbol">Fútbol</option>
              <option value="Tenis">Tenis</option>
              <option value="Vóley">Vóley</option>
            </select>
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
