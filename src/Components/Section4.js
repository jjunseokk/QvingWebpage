import React from "react";
import '../Style/section4.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./TapMenu/Card";



import qvingkiosk from '../Asset/Image/qvingkiosk.png';
import qvingrayout_1 from '../Asset/Image/qvingrayout_1.png';
import qvingrayout_2 from '../Asset/Image/qvingrayout_2.png';
import qvingrayout_3 from '../Asset/Image/qvingrayout_3.png';
import qvingrayout_4 from '../Asset/Image/qvingrayout_4.png';
import qvingtutorial from '../Asset/Image/qvingtutorial.png'

const Section4 = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: true,
    }

    return (
        <div className="section4-container">
            <img className="qving-title" src={qvingtutorial} alt="" />
            <div className="qving-area">
                <div className="qving">
                    <img className="qving-kiosk" src={qvingkiosk} alt="" />
                    <img className="qving-rayout" src={qvingrayout_2} alt="" />
                </div>

            </div>
        </div>
    )
};

export default Section4;