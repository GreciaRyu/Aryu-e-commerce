import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ItemDetail ({ detail }) {
    return(
    <Container>
      <Row>
        <Col xs lg={4}>
        <Image src={detail.image} thumbnail />
        </Col>
        <Col xs lg={8}>
            <h1>{detail.title}</h1>
            <h3 className="precio"> ${detail.price}</h3>
            <p className="item--description">{detail.description}</p>
            <div className='d-flex justify-content-around'>
                <Button variant="light" /*as={Link} to={``}*/>
                    Comprar
                </Button>
                <Button variant="light" /*as={Link} to={``}*/>
                    Agregar al carrito
                </Button>
            </div>
        </Col>
      </Row>
      
    </Container>
    );
}
