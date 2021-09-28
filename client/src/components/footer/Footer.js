import React from 'react'
import { Col, Container, FormControl, InputGroup, Row, Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import "./Footer.css"

function Footer() {
    return (
        <Container fluid className="footer">
                <Row className="justify-content-md-center footer-top">
                    <Col sm={6} md={3} >
                        <Row className="footer-content"> 
                            <Row className="footer-content-title">SimplyLuxury</Row>
                            <InputGroup>
                                <FormControl placeholder="Enter email address" aria-label="Enter email address" aria-describedby="basic-addon2"/>
                                <Button variant="danger">Sign Up</Button>
                            </InputGroup>
                        </Row>
                    </Col>
                    <Col sm={6} md={3}>
                        <Row className="footer-content"> 
                            <Container className="footer-content-sub">
                                <h5>Categories</h5>
                                <ul className="list-unstyled">
                                    <li className="footer-content-links">Beds</li>
                                    <li className="footer-content-links">Sofas</li>
                                    <li className="footer-content-links">Wardrobes</li>
                                    <li className="footer-content-links">Tables & Chairs</li>
                                </ul>
                            </Container>
                        </Row>
                    </Col>
                    <Col sm={6} md={3}>
                    <Row className="footer-content"> 
                            <Container className="footer-content-sub">
                                <h5>Site</h5>
                                <ul className="list-unstyled">
                                    <li className="footer-content-links">Products</li>
                                    <li className="footer-content-links">shop</li>
                                    <li className="footer-content-links">About Us</li>
                                    <li className="footer-content-links">Contact Us</li>
                                </ul>
                            </Container>
                        </Row>
                    </Col>
                </Row>
                <Row style={{marginTop: "50px"}}>
                    <Col md={{ span: 4, offset:2 }}> 
                        &copy;{new Date().getFullYear}Chuan Kai- All Rights Reserved
                    </Col>
                </Row>
        </Container>
    )
}

export default Footer
