import React from "react";
import '../Style/section2.css'
import speechText from '../Asset/Image/speechText.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Section2 = () => {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
        };

        return (
            <div className="section2-container">
                <div className="form-area">
                    <div className="section2-bubble">
                        내 주변에 큐빙이 있을까 <img src={speechText} alt="" />
                    </div>
                    <div className="section2-search">
                        검색 영역
                    </div>

                    <div className="kakao-map">
                        카카오 지도 영역
                    </div>
                </div>
                <div>
                    <h2> Single Item</h2>
                    <Slider {...settings}>
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                        <div>
                            <h3>5</h3>
                        </div>
                        <div>
                            <h3>6</h3>
                        </div>
                    </Slider>
                </div>
            </div>
        )
    };
export default Section2;