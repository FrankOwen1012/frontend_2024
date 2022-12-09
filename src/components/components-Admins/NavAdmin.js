//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
//import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffcanvasExample() {
  return (
    <>
      {[ 'xxl'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Bienvenido Admin : </Navbar.Brand>
            <Navbar.Brand href="#">Cerrar Sesion </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Acciones del Admin
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
           
                  <NavDropdown
                    title="Registros"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    
                    <NavDropdown.Item href="/registrarProducto">
                      Agragar Productos
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                     Eliminar Clientes
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Reportes"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                   
                    <NavDropdown.Item href="/verProductos">
                      Ver Productos
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                     Ver Clientes
                    </NavDropdown.Item>
                  </NavDropdown>

                </Nav>
         
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;