import React, { useState, useEffect } from 'react'
import { Container, Row, Nav, Card, Pagination, Dropdown, InputGroup, FormControl, Button } from 'react-bootstrap'
import api from '../apis/api'
import "./Shop.css"
import Item from '../item/Item'


function Shop() {
    const [ isLoading, setLoading ] = useState(true)
    const [ sortType, setSortType ] = useState("Default")
    const [ activePageNo, setActivePageNo ] = useState(1)
    const [ itemList, setItemList ] = useState([])
    const [ totalProductSize, setTotalProductSize ] = useState(0)
    const [ numberOfPage, setNumberOfPage ] = useState(0)
    
    useEffect(() => {
        if(isLoading) {
            if(sortType === "Default") {
                api.getResultPaginated({
                    "pageno": activePageNo 
                }).then((res)=>{
                    console.log(res.data)
                    setItemList(res.data.results)
                    setTotalProductSize(res.data.totalProductSize)
                }).catch(err=> {
                    console.log(err)
                })
            }
            if(sortType === "LowestHighest") {
                api.getAllProductPriceAsc({
                    "pageno": activePageNo 
                }).then((res)=>{
                    console.log(res.data)
                    setItemList(res.data.results)
                    setTotalProductSize(res.data.totalProductSize)
                }).catch(err=> {
                    console.log(err)
                })
            }
            if(sortType === "HighestLowest") {
                api.getAllProductPriceDesc({
                    "pageno": activePageNo 
                }).then((res)=>{
                    console.log(res.data)
                    setItemList(res.data.results)
                    setTotalProductSize(res.data.totalProductSize)
                }).catch(err=> {
                    console.log(err)
                })
            }
            setLoading(false)
        }
    }, [isLoading, sortType, activePageNo])
    
    useEffect(()=> {
        setNumberOfPage(Math.ceil(totalProductSize/12))
    }, [totalProductSize])

    const sortTypeHandler = (key) => {
        setSortType(key)
        setActivePageNo(1)
        setLoading(true)
    }

    const selectPageHandler = (event) => {
        const clickedActivePage = parseInt(event.target.text)
        setActivePageNo(clickedActivePage)
        setLoading(true)
    }

    let items = [];

    for (let number = 1; number <= numberOfPage; number++) {
        items.push(
          <Pagination.Item key={number} active={number === activePageNo} onClick={(event) => selectPageHandler(event)}>
            {number}
          </Pagination.Item>,
        );
    }

    const getHeightProductSection = () => {
        const numberOfRows =  Math.ceil(itemList.length/4)
        const height = numberOfRows * 400 + 350
        return `${height}px`
    }

    return (
        <Container fluid>
            <Row className="shop-top">
                <Row className="shop-top-title">
                    Shop
                </Row>
                <Nav defaultActiveKey="/">
                    <Nav.Item as="li">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link disabled>Shop</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Row>
            <Container className="shop-products-section" style={{height: getHeightProductSection() }}>
                <Row style={{marginTop: "30px"}}>
                    <Dropdown defaultValue="Default" onSelect={(key)=>{sortTypeHandler(key)}}>
                            <Dropdown.Toggle id="dropdown-basic">
                                Sort
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item eventKey="Default">Default</Dropdown.Item>
                                <Dropdown.Item eventKey="LowestHighest">Lowest - Highest</Dropdown.Item>
                                <Dropdown.Item eventKey="HighestLowest">Highest - Lowest</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                            {/* <InputGroup>
                                <FormControl placeholder="Enter email address" aria-label="Enter email address" aria-describedby="basic-addon2"/>
                            </InputGroup> */}
                </Row>
                <Row >
                    <Row xs={1} md={4} className="justify-content-md-center g-4">
                        { itemList.map(item =>
                            <Item productID={item.productid} itemName={item.itemname} price={item.price} description={item.description} image={item.image}/>
                        )}
                    </Row>
                    
                    <Row  className="g-5">
                        <Pagination className="justify-content-md-center">
                            <Pagination>{items}</Pagination>        
                        </Pagination>
                    </Row>
                </Row>
                
            </Container>
        </Container>
    )
}

export default Shop
