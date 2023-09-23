import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { ShopContext } from '../../context/shopContext';
import { CloseButton } from 'react-bootstrap';

export default function OrderModal({ onClose }) {
    const {limpiarCarrito}= useContext(ShopContext)
    useEffect(() => {
        limpiarCarrito()
    }, [])

    

    return (
      <>
        <div className="modal modal--show">
        <Modal.Dialog>
            <Modal.Header> 
            <Modal.Title className="saludo">¡Felicidades!</Modal.Title>
            <CloseButton onClick={onClose}/>
            </Modal.Header>

            <Modal.Body>
            <p>Tu compra ha sido realizada con éxito.</p>
            </Modal.Body>

            <Modal.Footer>
            <Button variant="light" as={Link} to={"/productos"}>Seguir comprando</Button>
            </Modal.Footer>
        </Modal.Dialog>
        </div>
      </>
    );
  }