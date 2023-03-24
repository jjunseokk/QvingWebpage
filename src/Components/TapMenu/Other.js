// ------------------section3.js 기타용품 슬라이드----------------------

import React from "react";
import Card from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../Style/section3.scss';
import '../../Style/arrow.scss';


import Item_1 from '../../Asset/Image/card/item_1.png';
import Item_2 from '../../Asset/Image/card/item_2.png';
import Item_3 from '../../Asset/Image/card/item_3.png';
import Item_4 from '../../Asset/Image/card/item_4.png';



const Other = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: true,
    }
    return (
        <div>
            <Slider {...settings}>
                <Card img={Item_1} />
                <Card img={Item_2} />
                <Card img={Item_3} />
                <Card img={Item_4} />
            </Slider>

        </div>
    )
}


export default Other;