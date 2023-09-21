import {useState, useEffect, useContext} from "react";
import { useParams, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import Loader from "../Loader/indexLoader";
import "./stylesContainer.css";
import { ShopContext } from "../../context/shopContext";

const ItemListContainer =({props}) =>{
    const { products} = useContext(ShopContext)
    const [productsFilter, setProductsFilter] = useState(products)
    const { id } = useParams()

   function filtrado() {
        const filtered = products.filter(product => product.categoryId === id)
        filtered.length > 0 ? setProductsFilter(filtered) : setProductsFilter(products)
    }

    useEffect(() => {
        filtrado()
    }, [id])

    useEffect(() => {
        filtrado()
    }, [products])

    if(products.length===0||products.length===undefined){
        return(
            <Loader></Loader>
        )}
    
    return (
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col sm={2}>
                    <p className="saludo d-flex justify-content-center">{props}</p>
                </Col>
                <Col>
                    {productsFilter.map(prod => (
                        <div key={prod.id} className="cards">
                            <Card border="light" style={{ width: '14rem' }}>
                                <Card.Img className="card--img" variant="top" src={prod.image} alt="imagen del producto" />
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