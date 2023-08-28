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
    <Navbar bg="light" data-bs-theme="light" >
      <Container>
        <Navbar.Brand as={Link} to="/productos">
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
      {/* <div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="Logo" width="60" height="40" />
            </a>
            <div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Productos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contacto</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                  <CartWidget />
                  </a>
                </li>
              </ul>  
            </div>
          </div>
        </nav>
      </div>*/}
    </> 
  );
}

export default NavBar
