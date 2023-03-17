import React from "react";
import '../Style/section2.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// img
import speechText from '../Asset/Image/speechText.png';


const Section2 = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 2561,
                settings: {
                    slidesToShow: 9,
                    slidesToScroll: 5,
                }
            },

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }




        ]
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
            <div className="section2-slide">
                <Slider className="slider-style" {...settings}>
                    <div>
                        <img src="http://3.34.69.207/images/qving-img/qving-img01.jpg" alt="" />
                    </div>
                    <div>
                        <img src="http://3.34.69.207/images/qving-img/qving-img02.jpg" alt="" />
                    </div>
                    <div>
                        <img src="http://3.34.69.207/images/qving-img/qving-img03.jpg" alt="" />
                    </div>
                    <div>
                        <img src="http://3.34.69.207/images/qving-img/qving-img04.jpg" alt="" />
                    </div>
                    <div>
                        <img src="http://3.34.69.207/images/qving-img/qving-img05.jpg" alt="" />
                    </div>
                    <div>
                        <img src="http://3.34.69.207/images/qving-img/qving-img06.jpg" alt="" />
                    </div>
                    <div>
                        <img src="http://3.34.69.207/images/qving-img/qving-img07.jpg" alt="" />
                    </div>
                    <div>
                        <img src="http://3.34.69.207/images/qving-img/qving-img08.jpg" alt="" />
                    </div>
                    <div>
                        <img src="http://3.34.69.207/images/qving-img/qving-img09.jpg" alt="" />
                    </div>
                    <div>
                        <img src="http://3.34.69.207/images/qving-img/qving-img10.jpg" alt="" />
                    </div>
                    <div>
                        <img src="http://3.34.69.207/images/qving-img/qving-img11.jpg" alt="" />
                    </div>
                    <div>
                        <img src="http://3.34.69.207/images/qving-img/qving-img12.jpg" alt="" />
                    </div>
                    <div>
                        <img src="http://3.34.69.207/images/qving-img/qving-img13.jpg" alt="" />
                    </div>
                    <div>
                        <img src="http://3.34.69.207/images/qving-img/qving-img14.jpg" alt="" />
                    </div>
                </Slider>
            </div>
        </div>
    )
};
export default Section2;