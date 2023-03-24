import React from "react";
import '../Style/header.scss'
import { Link } from "react-scroll";


// Img
import QvingLogo from '../Asset/Image/qvingLogo.png'

function Header() {
    return (
        <div className="Header-container">
            <img className="QvingLogo" src={QvingLogo} alt="" />
            <div className="FollowBtn">
                <Link to="1" spy={true} smooth={true}>
                    <span>매장 찾기</span>
                </Link>
                <Link to="2" spy={true} smooth={true}>
                    <span>입접 제품 소개</span>
                </Link>
                <Link to="3" spy={true} smooth={true}>
                    <span>사용법</span>
                </Link>
                <Link to="4" spy={true} smooth={true}>
                    <span>설치 비용</span>
                </Link>
                <Link to="5" spy={true} smooth={true}>
                    <span>문의 하기</span>
                </Link>
            </div>
        </div>
    )
};

export default Header;