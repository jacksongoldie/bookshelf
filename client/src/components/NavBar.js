import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import account from './assets/account.png'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';


function NavBar({ profile }) {
    // use tern to display upload user photo or default img
    const image =  profile ? profile.image ? profile.image : account : account;

  return (
    <div style={{ borderBottom: '5px solid green', borderTop: '5px solid green' }}>
        <Navbar bg="white" expand="lg">
        <Container className='mx-0 px-5' fluid>
            <LinkContainer to='/'>
                <Navbar.Brand>BookShelf</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <LinkContainer to='/'>
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/browse'>
                    <Nav.Link>Browse</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/myshelf'>
                    <Nav.Link>MyShelf</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/friends'>
                    <Nav.Link>Friends</Nav.Link>
                </LinkContainer>
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item>Action</NavDropdown.Item>
                    <NavDropdown.Item>Another action</NavDropdown.Item>
                    <NavDropdown.Item>Something</NavDropdown.Item>
                <NavDropdown.Divider />
                    <NavDropdown.Item>Separated link</NavDropdown.Item>
                </NavDropdown> */}
            </Nav>
            </Navbar.Collapse>
            <LinkContainer to='/account'>
                <Nav.Link><Image roundedCircle src={image} alt='account icon' width={50} height={50} /></Nav.Link>
            </LinkContainer>
            </Container>
        </Navbar>
    </div>
  )
};

export default NavBar;