import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import "./loaderStyles.css";

export default function Loader() {
    return (
        <Container>
            <Row>
                <Col xs lg={12}>
                    <div className="loader d-flex justify-content-center  align-items-center">
                        <Spinner animation="border" role="status">
                        </Spinner>
                        <h4> Cargando...</h4>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}