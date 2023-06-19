import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditarPartido = ({modal, toggle, ActualizarPartido, PartidoObj}) => {
    const [PartidoName, setPartidoName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "PartidoName"){
            setPartidoName(value)
        }else{
            setDescription(value)
        }


    }

    useEffect(() => {
        setPartidoName(PartidoObj.Name)
        setDescription(PartidoObj.Description)
    },[PartidoObj.Name, PartidoObj.Description]);

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = PartidoName
        tempObj['Description'] = description
        ActualizarPartido(tempObj)
    }

    //ventana modal para editar partido
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Actualizar Partido</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label>Titulo</label>
                        <input type="text" className = "form-control" value = {PartidoName} onChange = {handleChange} name = "PartidoName"/>
                    </div>
                    <div className = "form-group">  
                        <label>Descripción</label>
                        <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea>
                    </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default EditarPartido;