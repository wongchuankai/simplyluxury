import React from 'react'
import { Card, Container, CardGroup, OverlayTrigger } from 'react-bootstrap'
import furniture1 from "../../images/furniture_1.jpg"
import furniture2 from "../../images/furniture_2.jpg"
import furniture3 from "../../images/furniture_3.jpg"
import furniture4 from "../../images/furniture_4.jpg"

import "./FeaturedProducts.css"

function FeaturedProducts() {

    return (
        <Container fluid className="FeaturedProducts">
            <h1 className="FeaturedProducts-title">Featured Products</h1>
            <CardGroup style={{maxWidth:"1200px", marginLeft:"auto", marginRight:"auto"}}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img className="cardImg" src={furniture1}/>
                    <Card.Body>
                        <Card.Title style={{textAlign:"center"}}>Sofa Chair</Card.Title>
                        <Card.Text>
                        Comfy seating throughout the home gives a relaxed feel.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img className="cardImg" src={furniture2}/>
                    <Card.Body>
                        <Card.Title style={{textAlign:"center"}}>Cantilever Chair</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img className="cardImg" src={furniture3}/>
                    <Card.Body>
                        <Card.Title style={{textAlign:"center"}}>Arm Chair</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img className="cardImg" src={furniture4}/>
                    <Card.Body>
                        <Card.Title style={{textAlign:"center"}}>Arm Chair</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </Container>
    )
}

export default FeaturedProducts
