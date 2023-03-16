import React from "react";
import '../Style/header.css'
import { Link } from "react-scroll"


// Img
import QvingLogo from '../Asset/Image/qvingLogo.png'

function Header() {
    return (
        <div className="Header-container">
            <img className="QvingLogo" src={QvingLogo} alt="" />
            <div className="FollowBtn">
                <Link to="1" spy={true} smooth={true}>
                    <a href="#!">매장 찾기</a>
                </Link>
                <Link to="2" spy={true} smooth={true}>
                    <a href="#!">입접 제품 소개</a>
                </Link>
                <Link to="3" spy={true} smooth={true}>
                    <a href="#!">사용법</a>
                </Link>
                <Link to="4" spy={true} smooth={true}>
                    <a href="#!">설치 비용</a>
                </Link>
                <Link to="5" spy={true} smooth={true}>
                    <a href="#!">문의 하기</a>
                </Link>
            </div>
        </div>
    )
};

export default Header;