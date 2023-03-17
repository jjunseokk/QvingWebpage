import React from "react";
import '../Style/section1.css';
import styled from "styled-components";
import { Link } from "react-scroll";
import Header from "./Header";


// Img
import Qving from '../Asset/Image/qving.png';
import QvingCircle1 from '../Asset/Image/QvingCricle1.png';
import QvingCircle2 from '../Asset/Image/QvingCricle2.png';
import QvingCircle3 from '../Asset/Image/QvingCricle3.png';
import kakao from '../Asset/button/kakaoinquiry.png';
import call from '../Asset/button/callinquiry.png';
import Caption from '../Asset/Image/btnCaption.png';
import Allow from "../Asset/Image/allow.png";

const Section = () => {

    // 퀵메뉴 따라오게
    window.addEventListener('scroll', function (e) {
        document.querySelector(".inquiry").style.top = window.scrollY + "px"
    })

    return (
        <>
            <Header />
            <div className="section1-container">
                <div className="section1-title-img">
                    <div className="section1-title">
                        <p className="one">편리하고, 실속있는</p>
                        <p className="two">골프용품 자판기 큐빙</p>
                    </div>
                    <div className="section1-img">
                        <img src={Qving} alt="qving" />
                    </div>
                </div>
                <div className="section1-detail">
                    <p>사은품 말고!</p>
                    <Link to="5" spy={true} smooth={true}>
                        <Button>우리 매장<br /> <span style={{ color: "orange" }}>큐빙</span> 설치 신청하기</Button>
                    </Link>
                    <div>
                        <img src={Caption} alt="caption" />
                        <img src={Allow} alt="allow" style={{ marginLeft: "10px", width: "20px" }} />
                    </div>

                    <img className="detail-img1 position" src={QvingCircle1} alt="" />
                    <img className="detail-img2 position" src={QvingCircle2} alt="" />
                    <img className="detail-img3 position" src={QvingCircle3} alt="" />
                </div>
            </div>
            <div className="inquiry">
                <a href="https://pf.kakao.com/_xnGFTT"><img src={kakao} alt="kakao" /></a>
                <a href="tel:01023138636"><img src={call} alt="" /></a>
            </div>

        </>

    )
};

const Button = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap');

    width: 402px;
    height: 105px;
    border: none;
    border-radius: 58px;
    margin-bottom: 10px;
    background-color: #886831;
    color: white;
    font-size: 35px;
    /* line-height: 52px; */
    font-family: 'Black Han Sans', sans-serif;
    cursor: pointer;
    &:hover{
        scale: 1.1;
        transition: all 1s;
    }
    z-index: 10;

    @media screen and (max-width: 425px) {
        width: 250px;
        height: 80px;
        font-size: 25px;
        z-index: 10;
    }
    
`;



export default Section;