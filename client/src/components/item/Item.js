import React from 'react'
import { Container, Row, Nav, Card, Pagination, ListGroup } from 'react-bootstrap'
import { CardActionArea } from '@mui/material';
import { useHistory } from 'react-router-dom'

function Item({ productID, itemName, price, description, image}) {
    const history = useHistory();

    function handleClick() {
        history.push(`/products/${productID}`);
    }
    
    return (
        <Card key={productID} id={productID} style={{ width: '18rem', marginRight:"30px" }} onClick={handleClick}>
            <CardActionArea>
                <Card.Img className="cardImg" src={image}/>
                <Card.Body>
                <Card.Title style={{textAlign:"center"}}>{itemName}</Card.Title>
                <Card.Text style={{textAlign: "center"}}>
                    ${price}
                </Card.Text>
                </Card.Body>
            </CardActionArea>
        </Card>
    )
}

export default Item
