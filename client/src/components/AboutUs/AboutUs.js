import React from 'react'
import Button from '@mui/material/Button'
import { Container, Row, Nav, Col, Form } from 'react-bootstrap'
import GitHubIcon from '@mui/icons-material/GitHub';
import "./AboutUs.css"
import { Typography } from '@mui/material'

function AboutUs() {
    return (
        <Container fluid className="cart-view">
            <Row className="cart-top">
                <Row className="cart-top-title">
                    About Us
                </Row>
                <Nav defaultActiveKey="/">
                    <Nav.Item as="li">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link disabled>About Us</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Row>
                <Container className="aboutus-main">
                    <Container>
                        <Row >
                            <Col>
                                <Typography gutterBottom style={{textAlign:"center", fontFamily:"'Josefin Sans', sans-serif", fontSize:"25px", paddingTop:"50px", color:"#101750"}} >Information About Us</Typography>
                                <Typography variant="subtitle1" gutterBottom style={{ fontSize:"20px", paddingTop:"20px"}} className="checkout-main-subtitle">
                                    Hi, My name is Wong Chuan Kai. <br/> Welcome to my site. <br/> This site is to demostrate React and NodeJS. <br/> <GitHubIcon/> <a href="https://github.com/wongchuankai">My Github</a> <br/><GitHubIcon/><a href="https://github.com/wongchuankai/simplyluxury">SimplyLuxury Github Repo</a>
                                </Typography>   
                            </Col>
                            <Col>
                            <Typography gutterBottom style={{textAlign:"center", fontFamily:"'Josefin Sans', sans-serif", fontSize:"25px", paddingTop:"50px", color:"#101750"}} >Get In Touch!</Typography>
                            <Form >
                                <Row>
                                    <Form.Group as={Col} className="mb-3" controlId="formBasicName">
                                        <Form.Label>Your Name</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>

                                    <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Your Email</Form.Label>
                                        <Form.Control type="email" placeholder="" />
                                    </Form.Group>
                                </Row>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Type Your Messages</Form.Label>
                                    <Form.Control as="textarea" rows={4} />
                                </Form.Group>
                                <Row className="justify-content-md-center">
                                    <Button variant="contained" color="secondary" type="submit" style={{width:"120px"}}>
                                        Send Mail
                                    </Button>
                                </Row>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </Container>
        </Container>
    )
}

export default AboutUs
