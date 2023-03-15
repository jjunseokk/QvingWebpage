import React, { useEffect, useState } from "react";
import '../Style/section5.css'

import bizTitle from '../Asset/Image/biztitle.png';
import bizText from '../Asset/Image/biztext.png';
import memoText from '../Asset/Image/memotext.png';
const Section5 = () => {
    // console.clear();

    const [change, setChange] = useState(false);

    useEffect(() => {
        handlescroll();
        console.log(document.querySelector(".section5-container").offsetTop);
    })

    const handlescroll = () => {
        let container = document.querySelector(".section5-container");
        if (container.offsetTop <= position) {
            setChange(true);
            console.log("true:::::", change);
        } else {
            setChange(false);
            // console.log("false::::", change);
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