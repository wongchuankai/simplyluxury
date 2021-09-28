import React, {useState, useEffect} from 'react'
import { Row, Nav, NavDropdown,Form, FormControl, Container, Col } from 'react-bootstrap'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import LocalStorageService from "../service/LocalStorageService"
import "./ShoppingCart.css"

function ShoppingCart() {
    return (
        <Container fluid className="cart-view">
            <Row className="cart-top">
                <Row className="cart-top-title">
                    My cart
                </Row>
                <Nav defaultActiveKey="/">
                    <Nav.Item as="li">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="/shop">Shop</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link disabled>View Cart</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Row>
            <Container className="cart-products-section">
                <Row className="justify-content-md-center cart-title">
                    <Col style={{textAlign:"center"}}>
                        Product
                    </Col>
                    <Col style={{textAlign:"center"}}>
                        Price
                    </Col>
                </Row>
                <Row>
                <List sx={{ width: '90%', bgcolor: 'background.paper', marginLeft:"auto"}}>
                <ListItem alignItems="center">
                    <Box sx={{width:"60%", display:"flex", alignItems:"center"}}>
                            <Checkbox/>
                            <ListItemAvatar>
                            <Avatar sx={{width: 100, height: 100 }} src="https://simply-luxury-bucket.s3.ap-southeast-1.amazonaws.com/furniture_16.png" />
                            </ListItemAvatar>
                            <ListItemText
                            sx={{paddingLeft:"30px"}}
                            primary="Brunch this weekend?"
                            />
                    </Box>
                    <Box sx={{width:"40%",display:"flex", alignItems:"center"}}>
                            $100
                    </Box>
                        </ListItem>
      <Divider sx={{marginBottom:"20px"}}/>
      <ListItem alignItems="center">
                    <Box sx={{width:"60%", display:"flex", alignItems:"center"}}>
                    <Checkbox/>

                            <ListItemAvatar>
                            <Avatar sx={{width: 100, height: 100 }} src="https://simply-luxury-bucket.s3.ap-southeast-1.amazonaws.com/furniture_16.png" />
                            </ListItemAvatar>
                            <ListItemText
                            sx={{paddingLeft:"30px"}}
                            primary="Brunch this weekend?"
                            />
                    </Box>
                    <Box sx={{width:"40%",display:"flex", alignItems:"center"}}>
                            $100
                    </Box>
                        </ListItem>
      <Divider sx={{marginBottom:"20px"}}/>
    </List>
                </Row>
                <Row>
                        
                </Row>
            </Container>
        </Container>
    )
}

export default ShoppingCart
