import {useState, useEffect} from "react"
import { useParams, Link } from "react-router-dom";
// import Item from "./indexItem"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
 
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
        <h1>{props}</h1>
            {products.map(prod => (
                <Col lg={true} key={prod.id}>
                    <Card border="light" style={{ width: '18rem' }}>
                        <Card.Img className="card--img"variant="top" src={prod.image} />
                        <Card.Body>
                            <Card.Title>{prod.title}</Card.Title>
                            <Card.Text>
                                Precio ${prod.price}
                            </Card.Text>
                            <Button variant="dark" as={Link} to={`/item/${prod.id}`}>ver más</Button>
                        </Card.Body>
                    </Card>
                </Col>    
            ))}
        </Row>
    </Container>
)
}
export default ItemListContainer


// const ItemListContainer =({props}) => {
//     const [listaDeCompras,setListaDeCompras] = useState([])
//     const [input, setInput]= useState("")

//     const addItem= ()=> { 
//         if(input !==""){
//             setListaDeCompras([...listaDeCompras, input])
//             setInput("")
//         }
//     }
//     const deleteItem= (nombre) => {
//         let nuevalistaDeCompras= listaDeCompras.filter(producto => producto !== nombre)
//         setListaDeCompras(nuevalistaDeCompras)
//     }

//     return(
//         <div>
//             <h1>{props}</h1>
//             <input value={input} onChange={(event) => setInput(event.target.value)}></input>
//             <button onClick={addItem}>Guardar</button>
//             {
//                 listaDeCompras.length > 0? (
//                     <>
//                     {listaDeCompras.map(producto => <Item nombre={producto} deleteItem={deleteItem}/>)}
//                     </>
//                 ) : ( 
//                     <p>Lista vacia</p>
//                 )
//             }
//         </div>
//     )
// }

// export default ItemListContainer