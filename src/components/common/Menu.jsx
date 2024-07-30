import { Navbar, Container, Nav} from 'react-bootstrap';
import "../../assets/style/Menu.css";
import logo from "../../assets/img/Secundario-Color.png";

const Menu = () => {
    return (
        <div>
            <Navbar expand="lg" className="menu navbar-dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <div className='containerLogo-nav'>
                             <img src={logo} alt="" />
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Inicio</Nav.Link>
                            <Nav.Link href="#link">Servicios</Nav.Link>
                            <Nav.Link href="#link">Sobre Nosotros</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menu;