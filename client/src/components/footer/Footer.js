import React, { useRef, useState } from 'react'
import { Col, Container, FormControl, InputGroup, Row, Button, Form, Modal } from 'react-bootstrap'
import api from '../apis/api'
import "bootstrap/dist/css/bootstrap.min.css"
import "./Footer.css"

function Footer() {
    const emailRef = useRef("");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const signUpHandler = (event) => {
        event.preventDefault()
        const email = emailRef.current.value
        
        api.signupEmail({
                "email": email
            }).then( res=> {
            setShow(true)
        }).catch( error => {
            setShow(true)
        })
    }

    return (
        <Container fluid className="footer">
                <Row className="justify-content-md-center footer-top">
                    <Col sm={6} md={3} >
                        <Row className="footer-content"> 
                            <Row className="footer-content-title">SimplyLuxury</Row>
                            <Form onSubmit={(event) => signUpHandler(event)}>
                                <InputGroup>
                                    <FormControl ref={emailRef} type="email" placeholder="Enter email address" aria-label="Enter email address" aria-describedby="basic-addon2"/>
                                    <Button variant="danger" type="submit">Sign Up</Button>
                                </InputGroup>
                            </Form>
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
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Thank you for signing with Us!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>You have successfully sign up with your email : {emailRef.current.value} </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
        </Container>
    )
}

export default Footer
