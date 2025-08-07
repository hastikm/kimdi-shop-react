
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../navbar/nav.css';

function MyNav() {
  const expand = 'md';
  return(


<Navbar key={expand} expand={expand} className=" mb-3" style={{backgroundColor: "rgb(251, 202, 39)"}}>
          <Container>
            <Navbar.Brand href="#" style={{fontFamily : 'lalezar' , fontSize : '30px'}}>کیمدی کینگ </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink to='/' className='nav-link'>کیمدی</NavLink>
                  <NavLink to='/about' className='nav-link'> آلبوم </NavLink>
                   <NavLink to='/blog' className='nav-link'>برچسب</NavLink>
                   <NavLink to='/panel' className='nav-link'>پنل</NavLink>
                   <NavLink to='/login' className='nav-link'>ورود</NavLink>
                </Nav>
            
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

  )
};

export default MyNav;