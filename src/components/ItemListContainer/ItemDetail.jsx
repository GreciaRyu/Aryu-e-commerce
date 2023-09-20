import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCount from './ItemCount';

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
            <ItemCount stock={detail.stock} item={detail}></ItemCount>
        </Col>
      </Row>
    </Container>
    );
}
