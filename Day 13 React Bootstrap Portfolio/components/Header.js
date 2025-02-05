import React from 'react'
import {Navbar, Nav, Button} from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar className='justify-content-between' bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <Button variant="outline-info">Login</Button>

    </Navbar>
  )
}

export default Header;
