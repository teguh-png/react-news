import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar style={{height: '80px'}} bg="success" variant="dark">
      <Container>
        <Navbar.Brand href="#home">REACT NEWS</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar;
