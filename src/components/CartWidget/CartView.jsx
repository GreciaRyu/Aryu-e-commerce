import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useContext, useEffect } from 'react';
import { ShopContext } from '../../context/shopContext';
import "./cartViewStyles.css";
import { Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import gasp from "../../images/shocked-gasp.gif";


const CartView = () => {
    const {cart, limpiarCarrito, removesFromCart, totalCartPrice,totalCart} = useContext(ShopContext) 
    
    useEffect(() => {
        totalCartPrice()
    }, [cart])

    if(cart===undefined||cart.length===0){
        return(
            <Container>
            <Row>
                <Col xs lg={7}>
                    <div className="saludo d-flex justify-content-end">
                        <img  src={gasp} alt="gif de gatito sorprendido"></img>   
                    </div>
                </Col>      
                <Col xs lg={5}className="d-flex align-items-center">
                     <div className="saludo">
                        <h4>¡Oh no, el carrito esta vacio!</h4> 
                        <Button variant="light" as={Link} to="/productos">
                            Ir a comprar
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
        )}

    return (
        <Container>
            <Row>
                <Col xs={12} lg={7}>
                    {cart.map(item => (
                        <div key={item.id} className='cart--item'>
                            <div>
                                <img src={item.image} alt={item.title} className="img-thumbnail float-start cart--img"  />
                            </div>
                            <div className='cart--item--title d-flex align-items-center justify-content-evenly'>
                                <h3 className='cart--title'>{item.title}</h3>
                                <h5>Cantidad: {item.quantity}</h5>
                                <h4 className="precio"> ${item.price}</h4>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <Stack direction="horizontal" gap={1}>
                                    <Button variant="dark" onClick={() => removesFromCart(item.id)}>
                                        Eliminar
                                    </Button>
                                    <Button variant="dark" as={Link} to={`/item/${item.id}`} >
                                        ver detalles
                                    </Button>
                                </Stack>
                            </div>
                        </div>
                    ))}
                </Col>
                <Col xs={12} lg={5} className="justify-items-center">
                    <div>
                        <h4>Total a pagar: <span className="precio">${totalCart}</span>
                        </h4>
                    </div>
                    <Stack direction="horizontal" gap={2} className="col mx-auto">
                        <Button variant="light" as={Link} to={"/order"}>
                            Comprar carrito
                        </Button>
                        <Button variant="outline-danger" onClick={() => limpiarCarrito()}>
                            Limpiar carrito
                        </Button>
                    </Stack>
                </Col>
            </Row>
        </Container>
    )
}
export default CartView