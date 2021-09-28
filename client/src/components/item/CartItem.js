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
import LocalStorageService from "../service/LocalStorageService"
import InputSpinner from 'react-bootstrap-input-spinner'  

function CartItem({productID, name, price, description, image, quantity, itemList, setItemList, setIsQuantityUpdated, checkedBoxItems, setCheckedBoxItems}) {
    const [ qty, setQuantity ] = useState(quantity)
    
    const quantityChangedHandler = (num) => {
        setQuantity(num)
        setItemList(prev => prev.map(item=> {
            if(item.productid === productID) {
                item.quantity = num
            }
            return item
        }))
        setIsQuantityUpdated(true)
    }
    
    const checkBoxToggleHandler = (event) => {
        setCheckedBoxItems(prev => prev.map(item=> {
            if(item.productid === productID) {
                item.checked = event.target.checked
            }
            return item
        }))
    }

    const isChecked = () => {
        var checked = false
        for(let i = 0; i < checkedBoxItems.length; i++){ 
            if(checkedBoxItems[i].productid === productID) {
                checked = checkedBoxItems[i].checked
            }
        }
        return checked
    }

    return (
        <Container>
            <ListItem alignItems="center">
                                    <Box sx={{width:"80%", display:"flex", alignItems:"center"}}>
                                            <Checkbox checked={isChecked()} onChange={checkBoxToggleHandler}/>
                                                <ListItemAvatar>
                                                <Avatar variant="square" sx={{width: 100, height: 100 }} src={image} />
                                                </ListItemAvatar>
                                                <ListItemText
                                                sx={{paddingLeft:"30px"}}
                                                primary={name}
                                                />
                                                <Box sx={{width:"150px", marginLeft:"auto", marginRight:"auto"}}>
                                                <InputSpinner
                                                    type={'int'}
                                                    min={1}
                                                    step={1}
                                                    value={qty}
                                                    editable={false}
                                                    onChange={num=>quantityChangedHandler(num)}
                                                    variant={'dark'}
                                                    style={{marginLeft:'10px'}}
                                                />
                                                </Box>
                                        </Box>
                                        <Box sx={{width:"20%", paddingLeft:"50px", display:"flex", alignItems:"center"}}>
                                                ${(qty * price).toFixed(2)}
                                        </Box>
                                            </ListItem>
                        <Divider sx={{marginBottom:"20px"}}/>
        </Container>
    )
}

export default CartItem
