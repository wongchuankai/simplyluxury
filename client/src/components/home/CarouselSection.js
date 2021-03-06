import React from 'react'
import { Carousel } from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import C1 from '../../images/carousel_1.jpg'
import C2 from '../../images/carousel_2.jpg'
import C3 from '../../images/carousel_4.jpg'
import Button from 'react-bootstrap/Button'

import "./CarouselSection.css"

function CarouselSection() {
    const history = useHistory();
    const goToShopHandler = () => {
        history.push("/shop");
    }

    const goToProductsHandler = () => {
        history.push("/shop");
    }
    const goToAboutUsHandler = () => {
        history.push("/about-us");
    }
    return (
        <div className="CarouselSection">
            <Carousel variant="dark">
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100 carousel-image"
                        src={C1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{fontWeight:"bold"}}>SimplyLuxury Catalogue</h3>
                        <p>Splendid and Affordable furniture for the living.</p>
                        <Button size="lg" variant="secondary" onClick={goToShopHandler}>Shop Now</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100 carousel-image"
                        src={C2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{fontWeight:"bold"}}>New Furniture Collection Trends in 2020</h3>
                        <p>Luxury is in each detail.</p>
                        <Button size="lg" variant="secondary" onClick={goToProductsHandler}>See Products</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100 carousel-image"
                        src={C3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{fontWeight:"bold"}}>Visit our About Us page to find out more about us!</h3>
                        <p>Luxury never goes out of fashion.</p>
                        <Button size="lg" variant="secondary" onClick={goToAboutUsHandler}>Find out more</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselSection
