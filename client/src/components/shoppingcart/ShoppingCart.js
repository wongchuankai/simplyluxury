import React, {useState, useEffect} from 'react'
import { Row, Nav, NavDropdown,Form, FormControl, Container, Col } from 'react-bootstrap'
import Button from '@mui/material/Button'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import LocalStorageService from "../service/LocalStorageService"
import InputSpinner from 'react-bootstrap-input-spinner'  
import "./ShoppingCart.css"
import CartItem from '../item/CartItem';
import DeleteIcon from '@mui/icons-material/Delete';
import { useHistory } from 'react-router-dom'
import api from '../apis/api'

function ShoppingCart() {
    const history = useHistory();

    const [ isLoading, setLoading ] = useState(true)
    const [ itemList, setItemList ] = useState([])
    const [ subtotal, setsubtotal ] = useState(0.00)
    const [ shippingFee, setShippingFee ] = useState(0.00)
    const [ total, setTotal ] = useState(0.00)
    const [ isQuantityUpdated, setIsQuantityUpdated ] = useState(false)
    const [ isAnyChecked, setIsAnyChecked ] = useState(false)
    const [ selectAllVal, setSelectAllVal ] = useState(false)
    const [ checkedBoxItems, setCheckedBoxItems ] = useState([])

    useEffect(() => {
        var isChecked = false
        var selectAll = true
        for(let i = 0;i < checkedBoxItems.length; i++) {
            if(checkedBoxItems[i].checked) {
                isChecked = true
            } else { 
                selectAll = false
            }
        }
        setIsAnyChecked(isChecked)
        setSelectAllVal(selectAll)
    }, [checkedBoxItems])

    useEffect(()=> {
        var current_subtotal = 0.0
        for(var i = 0; i < itemList.length; i++) {
            current_subtotal = current_subtotal + itemList[i].quantity * itemList[i].price
        }
        setsubtotal(current_subtotal)
    }, [itemList])
    useEffect(() => {
        setShippingFee(subtotal*0.1)
        setTotal(subtotal*1.1)
    }, [subtotal])
    
    useEffect(()=> {
        if(isQuantityUpdated) {
            var user_shopping_cart =  []
            for(let i = 0; i < itemList.length;i++) {
                var item = itemList[i]
                for(let j = 0; j < item.quantity; j ++) {
                    user_shopping_cart.push(item.productid)
                }
            }
            LocalStorageService.SetCart(user_shopping_cart)
            console.log(LocalStorageService.getCart())
            setIsQuantityUpdated(false)
        }
    }, [isQuantityUpdated, itemList])

    useEffect(()=> {
        if(isLoading) {
            var user_shopping_cart =  LocalStorageService.getCart()
            if(user_shopping_cart !== null) {
                // var user_shopping_cart_list = JSON.parse(user_shopping_cart).sort()
                api.getProductByIDs({ productIDs: user_shopping_cart}).then( res => {
                    if(res.data.results.length > 0) {
                        var processedItemList = res.data.results
                        console.log(processedItemList)
                        setItemList(processedItemList)
                        var checkedBoxList = []
                        for(let i = 0; i < processedItemList.length; i++) {
                            checkedBoxList.push({
                                productid : processedItemList[i].productid,
                                checked: false
                            })
                        }
                        console.log(checkedBoxList)
                        setCheckedBoxItems(checkedBoxList)
                    }
                }).catch( err => {
                    console.log(err)
                })
                setLoading(false)
            } else {
                setItemList([])
            }
        }
    }, [isLoading])

    const deleteButtonHandler = () => {
        var selectedForDelete = []
        for(let i = 0;i < checkedBoxItems.length; i++) {
            if(checkedBoxItems[i].checked) {
                selectedForDelete.push(checkedBoxItems[i].productid)
            }
        }
        var user_shopping_cart =  LocalStorageService.getCart()
        var user_shopping_cart_list = JSON.parse(user_shopping_cart)
        user_shopping_cart_list = user_shopping_cart_list.filter( el => !selectedForDelete.includes(el))
        if(user_shopping_cart_list.length === 0) {
            LocalStorageService.clearCart()
        } else {
            LocalStorageService.SetCart(user_shopping_cart_list)
        }
        setLoading(true)
    }
    
    const getItemListHeight = () => {
        var numberOfItem = itemList.length
        const height = numberOfItem * 137 + 200
        return `${height}px`
    }
    
    const getCartSectionHeight = () => {
        var numberOfItem = itemList.length
        const height = ( numberOfItem - 1) * 130 + 600
        return `${height}px` 
    }

    const selectAllButtonHandler = (event) => {
        setCheckedBoxItems(prev => {
            prev.forEach(item => {
                item.checked = event.target.checked
            })
            console.log(prev)
            return prev
            }
        )
        if(event.target.checked) {
            setIsAnyChecked(true)
        } else {
            setIsAnyChecked(false)
        }
        setSelectAllVal(event.target.checked)
    }
    const goToCheckout = () => {
        LocalStorageService.clearCart()
        history.push(`/order-complete`);
    } 

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
            <Container className="cart-products-section" style={{height:getCartSectionHeight()}}>
                <Row >
                <Col style={{maxWidth: '60%', border:"5px solid #F4F4F4", padding:"5px" ,borderRadius: "15px", height: getItemListHeight()}}>
                    <Row className="cart-title">
                        My Items
                    </Row>
                        <List sx={{ bgcolor: 'background.paper', justifyContent: "left"}}>
                        {itemList.length > 1 && 
                            <FormGroup>
                                <FormControlLabel style={{marginLeft:"20px"}} control={<Checkbox checked={selectAllVal} onClick={(event)=> selectAllButtonHandler(event)}/>} label="Select all" />
                            </FormGroup>
                        }
                            {itemList.length > 0 && itemList.map(item => (
                                <CartItem key={item.productid} productID={item.productid} price={item.price} image={item.image} 
                                description={item.description} name={item.itemname} quantity={item.quantity} 
                                itemList={itemList} setItemList={setItemList} setIsQuantityUpdated={setIsQuantityUpdated} checkedBoxItems={checkedBoxItems} setCheckedBoxItems={setCheckedBoxItems}/>
                            ))} 
                    
                    </List>
                    {itemList.length > 0 &&
                    <Row style={{display: "flex", justifyContent: "flex-end", paddingRight: "50px"}}>
                        <Button variant="contained" startIcon={<DeleteIcon />} sx={{width:"120px"}} disabled={!isAnyChecked} onClick={deleteButtonHandler}>
                        Delete
                        </Button>
                    </Row>
                    } 
                    {itemList.length === 0 &&
                        <Row style={{display: "flex", justifyContent: "center"}}>
                            Your cart is empty. 
                        </Row>
                    }
                </Col>
                <Col style={{maxWidth:"10%"}}/>
                    <Col style={{height:"320px", maxWidth: '30%', border:"5px solid #F4F4F4", padding:"5px", borderRadius: "15px"}}>
                        <Row className="cart-title">
                            Order Summary
                        </Row>
                        <Row className="cart-order">
                            <Col>
                                Subtotal
                            </Col>
                            <Col>
                                ${subtotal.toFixed(2)}
                            </Col>
                        </Row>
                        <Row className="cart-order">
                            <Col>
                                Shipping Fee (10%)
                            </Col>
                            <Col>
                                ${shippingFee.toFixed(2)}
                            </Col>
                        </Row>
                        <Row className="cart-order-total">
                            <Col>
                                Total
                            </Col>
                            <Col>
                                ${total.toFixed(2)}
                            </Col>
                        </Row>
                        <Row style={{paddingTop:"20px", justifyContent:"center"}}>
                            <Button variant="contained" sx={{width:"250px", backgroundColor: "#f57224"}} disabled={total === 0} onClick={goToCheckout}>
                                Proceed to checkout
                            </Button>
                        </Row>
                    </Col>
                </Row>


            </Container>
        </Container>
    )
}

export default ShoppingCart
