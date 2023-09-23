import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ShopContext } from '../../context/shopContext';
import { useContext, useEffect, useState} from 'react';
import OrderModal from './OrderModal';
import "./orderStyles.css";


export default function Order () {
    const {cart,totalCartPrice,totalCart} = useContext(ShopContext) 
   
    useEffect(() => {
        totalCartPrice()
    }, [cart])

    const [showModal, setShowModal] = useState(false)

    return(
    <>
        <Container fluid className="order--container">
            <Row className="justify-content-center">
                <Col>
                    <h3>Su compra:</h3>
                    <ul>
                    {cart.map(item => (
                        <div key={item.id} className='px-2'>
                                <li className='d-flex' >
                                    <h6 className='pe-2'>{item.title}</h6>
                                    <h6 className='pe-2'>x{item.quantity}</h6>
                                    <h6 className="precio"> ${item.price}</h6>                                    
                                </li>
                        </div>
                    ))}
                    <h5>Total a pagar: <span className="precio">${totalCart}</span>
                    </h5>
                    </ul>
                    
                </Col>
            </Row>
            <h4 className='my-2' >Ingrese sus datos:</h4>
                <Form className='mt-3'>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formName">
                            <Form.Label>Nombre(s)</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Ema Andrea" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formLastname">
                            <Form.Label>Apellido(s)</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Gonzalez" />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} controlId="formEmail">
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="soy-un-correo@mail.com"
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className="my-3" controlId="formAddress">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="P. Sherman, Calle Wallaby 42, Sidney"/>
                        </Form.Group>   
                    </Row>
                    <Row>
                        <Form.Group as={Col} controlId="formCity">
                            <Form.Label>Ciudad</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Bogota"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formState">
                            <Form.Label>Estado</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Colombia"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formZip">
                        <Form.Label>CP</Form.Label>
                        <Form.Control 
                            type="tel" 
                            placeholder="110415"/>
                        </Form.Group> 
                    </Row>
                    <Row>
                        <Form.Group as={Col} controlId="formComment" className="my-3">
                            <Form.Label>Comentarios para la entrega:</Form.Label>
                            <Form.Control as="textarea" rows={1}
                            type="text"
                            placeholder="Edificio de rejas verdes, por favor toque el timbre."/>
                        </Form.Group>
                    </Row>   
                    <Row>
                        <Button variant="light" className="mb-4" onClick={() => setShowModal(true)}>
                            Finalizar compra
                        </Button>
                        {showModal? (
                            <OrderModal onClose={() => setShowModal(false)} />
                        ):<></>}
                    </Row> 
                </Form>
        </Container>
    </>

    );
}
