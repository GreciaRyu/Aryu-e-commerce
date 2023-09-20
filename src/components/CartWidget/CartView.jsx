import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { ShopContext } from '../../context/shopContext';
import "./cartViewStyles.css";
import { Stack } from 'react-bootstrap';

const CartView = () => {
    const {cart, limpiarCarrito, removesFromCart, totalCartPrice,totalCart} = useContext(ShopContext) 
    totalCartPrice()
    return (
        <Container>
                <Row>
                {cart.map(item => (
                    <>
                        <Col xs={8} lg={8}>
                            <div key={item.id}>
                                <img src={item.image} className="img-thumbnail float-start cart--img" alt={item.title} />
                            </div>
                            <div className='cart--item--title d-flex align-items-center justify-content-evenly'>
                                <h3 className='cart--title'>{item.title}</h3>
                                <h5>Cantidad: {item.quantity}</h5>
                                <h4 className="precio"> ${item.price}</h4>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <Stack direction="horizontal" gap={1}>
                                    <Button variant="dark" onClick={()=>removesFromCart(item.id)}>
                                        Eliminar
                                    </Button>
                                    <Button variant="dark" >
                                        ver detalles
                                    </Button>
                                </Stack>    
                            </div>
                        </Col>
                    </>
                ))}
                    <Col xs={4} lg={4}>
                        <div className='d-flex justify-content-between align-content-start'>
                            <h3>Mi carrito</h3>
                            <Button variant="dark" onClick={()=> limpiarCarrito()}>
                                Limpiar carrito
                            </Button>
                        </div>
                            <h4>Total a pagar: 
                                <span className="precio">${totalCart}</span> 
                            </h4>
                    </Col>
                </Row>
        </Container >
    )
}
export default CartView