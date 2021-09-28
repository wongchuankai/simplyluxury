import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import React from 'react'
import { Container, Row, Nav } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import "./Checkout.css"
import { Box } from '@mui/system'

function Checkout() {
    const history = useHistory();
    
    const goToShoppingHandler = () => {
        history.push(`/shop`);
    }
    
    return (
        <Container fluid className="cart-view">
            <Row className="cart-top">
                <Row className="cart-top-title">
                    Order Completed
                </Row>
                <Nav defaultActiveKey="/">
                    <Nav.Item as="li">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="/shop">Shop</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link disabled>Order Completed</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Row>
            <Container fluid className="checkout-main">
                <Row className="justify-content-md-center">
                    <Container style={{display:"flex", justifyContent:"center", paddingTop:"100px"}}>
                        <CheckCircleRoundedIcon color="success" sx={{fontSize: 150}}/>
                    </Container>
                <Typography gutterBottom style={{textAlign:"center", fontFamily:"'Josefin Sans', sans-serif", fontSize:"30px", paddingTop:"50px"}} className="checkout-main-title">Your order is completed!</Typography>
                <Typography gutterBottom style={{textAlign:"center", fontFamily:"'Josefin Sans', sans-serif", fontSize:"16px", paddingTop:"20px"}} className="checkout-main-subtitle">Thank you for your order! Your order is being processed and will be completed within 3-6
hours.<br/> You will receive an email confirmation when your order is completed.
</Typography>   
                
                    <Button variant="contained" color="secondary" sx={{width:"200px", marginTop:"30px"}} onClick={goToShoppingHandler}>Continue Shopping</Button>
                
                </Row>
            </Container>
        </Container>
    )
}

export default Checkout
