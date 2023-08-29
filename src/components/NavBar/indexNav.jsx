import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/indexCart";
import logo from "../../images/Logo.png";
import "./styles.css";


const NavBar = () => {
  return (
    <>
    <Navbar bg="light" data-bs-theme="light" fixed="top" >
      <Container>
        <Navbar.Brand as={Link} to="/">
        <img
              alt="Logo"
              src={logo}
              width="80"
              height="50"
            />{' '}
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/productos">Catalogo</Nav.Link>
            <Nav.Link as={Link} to="/productos/women's clothing">Ropa de Mujer</Nav.Link>
            <Nav.Link as={Link} to="/productos/jewelery">Accesorios</Nav.Link>
            <Nav.Link as={Link} to="/productos/electronics">Tecnología</Nav.Link>
            <Nav.Link as={Link} to="/productos"><CartWidget /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </> 
  );
}

export default NavBar
