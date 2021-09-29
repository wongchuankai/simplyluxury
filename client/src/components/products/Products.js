import React, { useEffect, useState } from 'react'
import { Row, Nav, NavDropdown,Form, FormControl, Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import apis from '../apis/api';
import "./Products.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { RiShoppingCartLine } from "react-icons/ri";
import Box from '@mui/material/Box';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalStorageService from "../service/LocalStorageService"
import { useHistory } from 'react-router-dom'

function Products() {
    const history = useHistory();
    const [ isLoading, setLoading] = useState(true)
    const [ item, setItem ] = useState([])
    let { id } = useParams()
    
    useEffect(() => {
        if(isLoading) {
            window.scrollTo(0, 0)
            apis.getProductByID({
                productID: id
            }).then( res => {
                // console.log(res.data)
                if(res.data.results.length > 0) {
                    setItem(res.data.results[0])
                }
            }).catch( err => {
                console.log(err)
            })
            setLoading(false)
        }
    }, [isLoading, id])

    const addToCartHandler = () => {
        LocalStorageService.AddToCart(item.productid)
        history.push(`/mycart`);
    }
    return (
        <Container fluid className="product-view">
            <Row className="shop-top">
                <Row className="shop-top-title">
                    Shop
                </Row>
                <Nav defaultActiveKey="/">
                    <Nav.Item as="li">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="/shop">Shop</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link disabled>View Item</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Row>
            <Card sx={{ maxWidth: 1000, display: 'flex', height: "400px", marginTop: 10, marginLeft: "auto", marginRight: "auto" }} >
                <Box sx={{ width: 500, display:"flex", justifyContent:"center"}}>
                    <img
                        height="400px"
                        src={item.image}
                        alt=""
                    />
                </Box>
                <Box sx={{ width: 300 }}>
                    <CardContent >
                        <Box style={{paddingTop:"50px"}}/>
                        <Typography style={{fontFamily: "Josefin Sans, sans-serif", color: "#1A0B5B"}} gutterBottom variant="h5" component="div">
                            {item.itemname}
                        </Typography>
                        <Typography style={{fontFamily: "Josefin Sans, sans-serif", color: "#A9ACC6"}} variant="body2" color="text.secondary">
                            {item.description}
                        </Typography>
                        <Box style={{paddingTop:"50px"}}/>
                        <CardActions>
                            <Button variant="contained" color="secondary" size="large" endIcon={<ShoppingCartIcon />} onClick={addToCartHandler}>Add To Cart</Button>
                        </CardActions>
                    </CardContent>
                </Box>

            </Card>
        </Container>
    )
}

export default Products
