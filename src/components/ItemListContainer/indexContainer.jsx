import {useState, useEffect} from "react"
import { useParams, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./stylesContainer.css";
 
const ItemListContainer =({props}) =>{
   const[products, setProducts] =useState([])

    const {id} =useParams()
  
    useEffect(()=>{
   // API: https://github.com/keikaavousi/fake-store-api
    const getItems = async () => {
        const response = await fetch("https://fakestoreapi.com/products")
        const productsApi = await response.json()
     
        const productsFilter = productsApi.filter(product => product.category === id)
        productsFilter.length > 0 ? setProducts(productsFilter) : setProducts(productsApi)
    }
       
    getItems()
    },[id]) 

return(
    <Container fluid>
        <Row className="justify-content-md-center">
            <Col sm={2}>
            <p className="saludo d-flex justify-content-center">{props}</p>
            </Col>
            <Col>
                {products.map(prod => (
                    <div key={prod.id} className="cards">
                        <Card border="light" style={{ width: '14rem' }}>
                            <Card.Img className="card--img" variant="top" src={prod.image} alt="imagen del producto"/>
                            <Card.Body>
                                <Card.Title className="card--title">{prod.title}</Card.Title>
                                <Card.Subtitle className="mb-2 precio">Precio ${prod.price}</Card.Subtitle>
                                <Card.Text className="card--description">
                                    {prod.description}
                                </Card.Text>
                                <Button variant="light" as={Link} to={`/item/${prod.id}`}>ver más</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </Col> 
        </Row>
    </Container>
)
}
export default ItemListContainer