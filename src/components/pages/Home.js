import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Home.css'
import  DSC_3512 from '../images/DSC_3512.png'
import DSC_3699 from '../images/DSC_3699.png'
import DSC_3844 from '../images/DSC_3844.png'

function Home() {

    return (
      <div class="carousel-wrapper">
            <Carousel  infiniteLoop autoPlay 
            interval={2000}
            showArrows={false}
            showIndicators={false}
            showThumbs={false}
            showStatus={false}>
                <div className ="image">
                    <img src={DSC_3512} />
                </div>
                <div className ="image">
                    <img src={DSC_3699} />
                </div>
                <div className ="image">
                    <img src={DSC_3844} />
                </div>
            </Carousel>
        </div>


   )
}

export default Home
