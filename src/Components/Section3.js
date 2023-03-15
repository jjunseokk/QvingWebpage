import React, { useState } from "react";
import '../Style/section3.css'
import GolfBall from "./TapMenu/GolfBall";
import GolfGlove from "./TapMenu/GolfGlove";
import GolfItem from "./TapMenu/GolfItem";
import Other from "./TapMenu/Other";

import qvingball_1 from '../Asset/Image/golfball1.png';
import qvingball_2 from '../Asset/Image/golfball2.png';
import qvingball_3 from '../Asset/Image/golfball3.png';
import qvingball_4 from '../Asset/Image/golfball4.png';
import qvingball_5 from '../Asset/Image/golfball5.png';
import glove from '../Asset/Image/glove.png';
import Title from '../Asset/Image/section3-title.png';
import golfBall from '../Asset/Image/golfball.png';
import golfGlove from '../Asset/Image/golfglove.png';
import golfItem from '../Asset/Image/golfitem.png';
import golfOther from '../Asset/Image/other.png';
import golfBall_on from '../Asset/Image/golfball_on.png';
import golfGlove_on from '../Asset/Image/golfglove_on.png';
import golfItem_on from '../Asset/Image/golfitem_on.png';
import golfOther_on from '../Asset/Image/other_on.png';

const Section3 = () => {
    const [currentTab, clickTab] = useState(0);

    const menuArr = [
        { name: '골프공', content: <GolfBall/>, img: golfBall, isActive: golfBall_on},
        { name: '일반용품', content: <GolfGlove/>, img: golfGlove, isActive: golfGlove_on },
        { name: '뷰티', content: <GolfItem/>, img: golfItem, isActive: golfItem_on },
        { name: '생활', content: <Other/>, img: golfOther, isActive: golfOther_on },
    ];
    const selectMenuHandler = (index) => {
        // parameter로 현재 선택한 인덱스 값을 전달해야 하며, 이벤트 객체(event)는 쓰지 않는다
        // 해당 함수가 실행되면 현재 선택된 Tab Menu 가 갱신.
        clickTab(index);
    };
    return (
        <div className="section3-container">
            <img src={Title} alt="title" />
            <ul>
                {menuArr.map((el, index) => (
                    <li className={index === currentTab ? "submenu focused" : "submenu"}
                        onClick={() => selectMenuHandler(index)}><img src={currentTab? el.img : el.isActive} alt="" /></li>
                ))}
            </ul>
            <div className="itemBox">
                <p>{menuArr[currentTab].content}</p>
            </div>
            <img className="ball_1 position" src={qvingball_2} alt="" />
            <img className="ball_2 position" src={qvingball_1} alt="" />
            <img className="ball_3 position" src={qvingball_5} alt="" />
            <img className="ball_4 position" src={qvingball_4} alt="" />
            <img className="ball_5 position" src={qvingball_3} alt="" />
            <img className="glove position" src={glove} alt="" />
        </div>
    )
};

export default Section3;