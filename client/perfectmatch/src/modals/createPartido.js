import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CrearPartido = ({ modal, toggle, save }) => {
  const [PartidoName, setPartidoName] = useState("");
  const [Description, setDescription] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "PartidoName") {
      setPartidoName(value);
    } else {
      setDescription(value);
    }
  };
    const handleSave = () => {
        const PartidoObj = {};
        PartidoObj["Name"] = PartidoName;
        PartidoObj["Description"] = Description;
        save(PartidoObj);
    };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Crear Partido</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label>Nombre del Partido</label>
            <input
              type="text"
              className="form-control"
              value={PartidoName}
              onChange={handleChange}
              name="PartidoName"
            />
          </div>
          <div className="form-group">
            <label>Descripcion</label>
            <textarea
              rows="5"
              className="form-control"
              value={Description}
              onChange={handleChange}
              name="description"
            ></textarea>
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
