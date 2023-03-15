import React from "react";
import Card from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../Style/section3.css';
import '../../Style/arrow.scss';


import itemGolf from '../../Asset/Image/card/itemgolf_2.png';

const GolfGlove = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: true,
    }
    return (
        <div>
            <Slider {...settings}>
                <Card img={itemGolf} />
            </Slider>

        </div>
    )
}


export default GolfGlove;