import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React from 'react';

//IMPORTANDO COMPONENTES DE FORMS 
import FormAdmin from './components-Admins/FormAdmin';
const Barra =()=> {
  return (
    <>
      {['xxl'].map((expand) => (
        <Navbar key={expand}  bg="dark" expand={expand} className="mb-3" variant="dark">
          <Container fluid>
            <Navbar.Brand href="#"   >Bienvenido:FRANK</Navbar.Brand>
            <Navbar.Brand href="#"   ></Navbar.Brand>
            <Navbar.Brand href="#"   ></Navbar.Brand>
            <Navbar.Brand href="#"   >Carrito de Compra</Navbar.Brand>
            <Navbar.Brand href="#"   >Cerrar Sesion</Navbar.Brand>
          
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}  />
            <Navbar.Offcanvas 
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              variant="primary" 
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Form Admin
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                
                <FormAdmin></FormAdmin>


              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Barra;