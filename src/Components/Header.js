import React from "react";
import '../Style/header.css'


// Img
import QvingLogo from '../Asset/Image/qvingLogo.png'

function Header(){
    return(
        <div className="Header-container">
            <img className="QvingLogo" src={QvingLogo} alt=""/>
            <div className="FollowBtn">
                 <a href="#!">매장 찾기</a>
                 <a href="#!">입접 제품 소개</a>
                 <a href="#!">사용법</a>
                 <a href="#!">설치 비용</a>
                 <a href="#!">문의하기</a>
            </div>
        </div>
    )
};

export default Header;