import React from "react";
import Card from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../Style/section3.css';
import '../../Style/arrow.scss';


import golfBall_1 from '../../Asset/Image/card/itemball_1.png';
import golfBall_2 from '../../Asset/Image/card/itemball_2.png';
import golfBall_3 from '../../Asset/Image/card/itemball_3.png';
import golfBall_4 from '../../Asset/Image/card/itemball_4.png';
import golfBall_5 from '../../Asset/Image/card/itemball_5.png';
import golfBall_6 from '../../Asset/Image/card/itemball_6.png';
import golfBall_7 from '../../Asset/Image/card/itemball_7.png';
import golfBall_8 from '../../Asset/Image/card/itemball_8.png';


const GolfBall = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: true,
    }
    return (
        <div>
            <Slider {...settings}>
                <Card img={golfBall_1} />
                <Card img={golfBall_2} />
                <Card img={golfBall_3} />
                <Card img={golfBall_4} />
                <Card img={golfBall_5} />
                <Card img={golfBall_6} />
                <Card img={golfBall_7} />
                <Card img={golfBall_8} />
            </Slider>

        </div>
    )
}


export default GolfBall;