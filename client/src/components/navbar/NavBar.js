import React from 'react'
import { Navbar,Nav } from 'react-bootstrap'
import { RiShoppingCartLine } from "react-icons/ri";
import "./NavBar.css"

class NavBar extends React.Component{
    render(){
        return(
            <div>
                <Navbar className="navbar-bg" expand="lg" sticky="top">
                    <Navbar.Brand className="navbar-logo" href="/">SimplyLuxury</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link className="navbar-section" href="/">Home</Nav.Link>
                            {/* <Nav.Link className="navbar-section" href="/products">Products</Nav.Link> */}
                            <Nav.Link className="navbar-section" href="/shop">Shop</Nav.Link>
                            <Nav.Link className="navbar-section" href="/about-us">About Us</Nav.Link>
                            {/* <Nav.Link className="navbar-section" href="/contact-us">Contact Us</Nav.Link> */}
                            <Nav.Link className="navbar-section" href="/mycart"><RiShoppingCartLine/></Nav.Link>
                        </Nav>
                        {/* <Form inline> */}
                        {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
                        {/* <Button variant="outline-success">Search</Button> */}
                        {/* </Form> */}
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )  
    }
}

export default NavBar;