import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import React from 'react'
import { Container, Row, Nav } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import "./Error.css"

function Error() {
    const history = useHistory();
    
    const goBackHandler = () => {
        history.push(`/`);
    }

    return (
        <Container fluid className="cart-view">
            <Row className="cart-top">
                <Row className="cart-top-title">
                    404 Not Found
                </Row>
                <Nav defaultActiveKey="/">
                    <Nav.Item as="li">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link disabled>Error</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Row>
            <Container fluid className="error-main">
                <Row className="justify-content-md-center">
                    <Typography gutterBottom style={{textAlign:"center", fontFamily:"'Josefin Sans', sans-serif", fontSize:"40px", paddingTop:"150px"}} className="checkout-main-title">PAGE NOT FOUND</Typography>
                    <Typography gutterBottom style={{textAlign:"center", fontFamily:"'Josefin Sans', sans-serif", fontSize:"16px", paddingTop:"20px"}} className="checkout-main-subtitle">
                        The page you requested was not found.
                    </Typography>  
                    <Button variant="contained" color="secondary" sx={{width:"200px", marginTop:"30px"}} onClick={goBackHandler}>Back To Home</Button>
                </Row>
            </Container>
        </Container>
    )
}

export default Error
