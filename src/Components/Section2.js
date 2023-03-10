import React from "react";
import '../Style/section2.css'
import speechText from '../Asset/Image/speechText.png';

const Section2 = () =>{
    return(
        <div className="section2-container">
            <div className="section2-bubble">
                내 주변에 큐빙이 있을까 <img src={speechText} alt=""/>
            </div>
        </div>
    )
};

export default Section2;