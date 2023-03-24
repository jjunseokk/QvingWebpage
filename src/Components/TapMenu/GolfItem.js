// ------------------section3.js 골프용품 슬라이드----------------------

import React from "react";
import Card from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../Style/section3.scss';
import '../../Style/arrow.scss';


import golfItem_1 from '../../Asset/Image/card/itemgolf_1.png';
import golfItem_2 from '../../Asset/Image/card/itemgolf_3.png';
import golfItem_3 from '../../Asset/Image/card/itemgolf_4.png';



const GolfItem = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: true,
    }
    return (
        <div>
            <Slider {...settings}>
                <Card img={golfItem_1} />
                <Card img={golfItem_2} />
                <Card img={golfItem_3} />
            </Slider>

        </div>
    )
}


export default GolfItem;