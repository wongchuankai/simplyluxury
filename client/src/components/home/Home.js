import React from 'react'
import { Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import CarouselSection from './CarouselSection'
import FeaturedProducts from './FeaturedProducts'
import LatestProducts from './LatestProducts'

function Home() {
    return (
        <div>
            <CarouselSection/>
            <FeaturedProducts/>
            <LatestProducts/>
        </div>
    )
}

export default Home
