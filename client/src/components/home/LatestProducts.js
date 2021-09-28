import React, { useEffect, useState } from 'react'
import { Container, Nav, Row, Col, Card } from 'react-bootstrap'
import furniture5 from "../../images/furniture_5.png"
import furniture6 from "../../images/furniture_6.png"
import furniture7 from "../../images/furniture_7.png"
import furniture8 from "../../images/furniture_8.png"
import furniture9 from "../../images/furniture_9.png"
import furniture10 from "../../images/furniture_10.png"
import furniture11 from "../../images/furniture_11.png"
import furniture12 from "../../images/furniture_12.png"
import furniture13 from "../../images/furniture_13.png"
import furniture14 from "../../images/furniture_14.png"
import furniture15 from "../../images/furniture_15.png"
import furniture16 from "../../images/furniture_16.png"

import "./LatestProducts.css"
function LatestProducts() {
    const [ currentTab, setTab ] = useState("NewArrival")
    return (
        <Container fluid className="latestProducts">
            <h1 className="latestProducts-title">Latest Products</h1>
            <Container>
                <Nav className="justify-content-md-center" onSelect={(selectedKey) => setTab(selectedKey)}>
                    <Nav.Item>
                        <Nav.Link eventKey="NewArrival">New Arrival</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="BestSeller">Best Seller</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="SpecialOffer">Special Offer</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
            <Container>
                {
                    currentTab === "NewArrival" && 
                    <Container style={{maxWidth:"1000px", marginLeft:"auto", marginRight:"auto"}}>
                        <Row xs={1} md={3} className="g-4">
                            <Col>
                            <Card>
                    <Card.Img className="cardImg" src={furniture5}/>
                    <Card.Body>
                        <Card.Title style={{textAlign:"center"}}>Sofa Chair</Card.Title>
                        <Card.Text>
                        Comfy seating throughout the home gives a relaxed feel.
                        </Card.Text>
                    </Card.Body>
                </Card>
                            </Col>
                            <Col>
                            <Card>
                    <Card.Img className="cardImg" src={furniture6}/>
                    <Card.Body>
                        <Card.Title style={{textAlign:"center"}}>Sofa Chair</Card.Title>
                        <Card.Text>
                        Comfy seating throughout the home gives a relaxed feel.
                        </Card.Text>
                    </Card.Body>
                </Card>
                            </Col>
                            <Col>
                            <Card >
                    <Card.Img className="cardImg" src={furniture7}/>
                    <Card.Body>
                        <Card.Title style={{textAlign:"center"}}>Sofa Chair</Card.Title>
                        <Card.Text>
                        Comfy seating throughout the home gives a relaxed feel.
                        </Card.Text>
                    </Card.Body>
                </Card>
                            </Col>
                            <Col>
                            <Card>
                    <Card.Img className="cardImg" src={furniture8}/>
                    <Card.Body>
                        <Card.Title style={{textAlign:"center"}}>Sofa Chair</Card.Title>
                        <Card.Text>
                        Comfy seating throughout the home gives a relaxed feel.
                        </Card.Text>
                    </Card.Body>
                </Card>
                            </Col>
                            <Col>
                            <Card>
                    <Card.Img className="cardImg" src={furniture9}/>
                    <Card.Body>
                        <Card.Title style={{textAlign:"center"}}>Sofa Chair</Card.Title>
                        <Card.Text>
                        Comfy seating throughout the home gives a relaxed feel.
                        </Card.Text>
                    </Card.Body>
                </Card>
                            </Col>
                            <Col>
                            <Card>
                    <Card.Img className="cardImg" src={furniture10}/>
                    <Card.Body>
                        <Card.Title style={{textAlign:"center"}}>Sofa Chair</Card.Title>
                        <Card.Text>
                        Comfy seating throughout the home gives a relaxed feel.
                        </Card.Text>
                    </Card.Body>
                </Card>
                            </Col>
                            
                            </Row>
                    </Container>
                }
                {
                    currentTab === "BestSeller" && 
                    <Container style={{maxWidth:"1000px", marginLeft:"auto", marginRight:"auto"}}>
                        <Row xs={1} md={3} className="g-4">
                            <Col>
                            <Card>
                    <Card.Img className="cardImg" src={furniture11}/>
                    <Card.Body>
                        <Card.Title style={{textAlign:"center"}}>Sofa Chair</Card.Title>
                        <Card.Text>
                        Comfy seating throughout the home gives a relaxed feel.
                        </Card.Text>
                    </Card.Body>
                </Card>
                            </Col>
                            <Col>
                            <Card>
                    <Card.Img className="cardImg" src={furniture12}/>
                    <Card.Body>
                        <Card.Title style={{textAlign:"center"}}>Sofa Chair</Card.Title>
                        <Card.Text>
                        Comfy seating throughout the home gives a relaxed feel.
                        </Card.Text>
                    </Card.Body>
                </Card>
                            </Col>
                            <Col>
                            <Card >
                    <Card.Img className="cardImg" src={furniture13}/>
                    <Card.Body>
                        <Card.Title style={{textAlign:"center"}}>Sofa Chair</Card.Title>
                        <Card.Text>
                        Comfy seating throughout the home gives a relaxed feel.
                        </Card.Text>
                    </Card.Body>
                </Card>
                            </Col>
                            <Col>
                            <Card>
                    <Card.Img className="cardImg" src={furniture14}/>
                    <Card.Body>
                        <Card.Title style={{textAlign:"center"}}>Sofa Chair</Card.Title>
                        <Card.Text>
                        Comfy seating throughout the home gives a relaxed feel.
                        </Card.Text>
                    </Card.Body>
                </Card>
                            </Col>
                            <Col>
                            <Card>
                    <Card.Img className="cardImg" src={furniture15}/>
                    <Card.Body>
                        <Card.Title style={{textAlign:"center"}}>Sofa Chair</Card.Title>
                        <Card.Text>
                        Comfy seating throughout the home gives a relaxed feel.
                        </Card.Text>
                    </Card.Body>
                </Card>
                            </Col>
                            <Col>
                            <Card>
                    <Card.Img className="cardImg" src={furniture16}/>
                    <Card.Body>
                        <Card.Title style={{textAlign:"center"}}>Sofa Chair</Card.Title>
                        <Card.Text>
                        Comfy seating throughout the home gives a relaxed feel.
                        </Card.Text>
                    </Card.Body>
                </Card>
                            </Col>
                            
                            </Row>
                    </Container>
                }
                {
                    currentTab === "SpecialOffer" && 
                    <Container>
                        {currentTab}
                    </Container>
                }
            </Container>
        </Container>
    )
}

export default LatestProducts
