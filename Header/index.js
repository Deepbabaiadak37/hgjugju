import React from 'react';

import  {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
/**
*@author
*function Header
*/


const Header= (props)=>{

	return(
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                       <Navbar.Brand href="#home">FOOD-GO</Navbar.Brand>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            
            <Navbar.Collapse id="responsive-navbar-nav">
            
                  <Nav className="mr-auto">
                   
                    <NavLink to="/" style={{ fontStyle : 'bold'}} className="nav-link">Home</NavLink>
                    <Nav.Link href="#pricing"> Pricing </Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                             <NavDropdown.Item href="#action/3.1">Action 1</NavDropdown.Item>
                             <NavDropdown.Item href="#action/3.2"> Action 2</NavDropdown.Item>
                             <NavDropdown.Item href="#action/3.3">Action 3</NavDropdown.Item>
                        <NavDropdown.Divider />
                       <NavDropdown.Item href="#action/3.4">Another Link</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  
                  <Nav>
                      <li className="nav-item">
                       <NavLink to="/signup" className="nav-link">Signup</NavLink>
                      </li>
                      <li>
                       <NavLink to="/signin" className="nav-link">Signin</NavLink>
                      </li>

                  </Nav>

            
            </Navbar.Collapse>  
        

            </Container>
           
        </Navbar>

	)
}

export default Header;