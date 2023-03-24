import React, { useEffect, useState } from "react";
import '../Style/section5.scss'

import bizTitle from '../Asset/Image/biztitle.png';
import bizText from '../Asset/Image/biztext.png';
import memoText from '../Asset/Image/memotext.png';

const Section5 = () => {
    console.clear();

    // 마우스 일정 구간을 지나면 함수 실행
    const [change, setChange] = useState(false);

    useEffect(() => {
        handlescroll();
    })

    const handlescroll = () => {
        let container = document.querySelector(".section5-container");
        if (container.offsetTop <= position) {
            setChange(true);
        } else {
            setChange(false);
        }
    }

    const [position, setPosition] = useState(0);

    function onScroll() {
        setPosition(window.scrollY);
    }
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="section5-container">
            <div className={change? "wrap is-active":"wrap isnot-active"}>
                <img src={bizTitle} alt="" />
                <img src={bizText} alt="" />
                <div className="memo">
                    <img src={memoText} alt="" />
                </div>
            </div>
        </div>
    )
};

export default Section5;