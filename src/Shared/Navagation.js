import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Logo from './../image/LOGO.png'

const Navagation = () => {
    return (
        <>
           <Navbar  expand="lg">
  <Container>
    <Navbar.Brand href="#"><img
          alt=""
          src={Logo}
          width="60px"
          height="50px"
          className="d-inline-block align-top bg-white"
        /></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="ms-auto "
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1" className='text-black fw-bold me-3'>Home</Nav.Link>
        <Nav.Link href="#action2" className='text-black fw-bold me-2'>Careers</Nav.Link>
        <Nav.Link href="#action2" className='text-black fw-bold me-2'>Blog</Nav.Link>
        <Nav.Link href="#action2" className='text-black fw-bold me-2'>About Us</Nav.Link>

        <Button style={{background: '#FFFF'}} className='ms-5 rounded-pill border-0 text-black'>LogIn</Button>
        <Button  style={{background: '#F48C06'}} className='ms-3 rounded-pill border-0 text-white'>SingUp</Button>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar> 
        </>
    );
};

export default Navagation;