import React from "react";
import '../Style/section6.scss'
import Block from "./OperationBlock/Block";

import blockImg_1 from '../Asset/Image/qvingBlockImage_1.png';
import blockImg_2 from '../Asset/Image/qvingBlockImage_2.png';
import blockImg_3 from '../Asset/Image/qvingBlockImage_3.png';
import blockImg_4 from '../Asset/Image/qvingBlockImage_4.png';
import blockTitle_1 from '../Asset/Image/qvingBlockText_1.png';
import blockTitle_2 from '../Asset/Image/qvingBlockText_2.png';
import blockTitle_3 from '../Asset/Image/qvingBlockText_3.png';
import blockTitle_4 from '../Asset/Image/qvingBlockText_4.png';
import qvingOperation from '../Asset/Image/qvingOperation.png';
import qvingOperationText from '../Asset/Image/qvingOperationText.png';


const Section6 = () => {
    return (
        <div className="section6-container">
            <div className="block_title">
                <img src={qvingOperation} alt=""/>
            </div>
            <div className="block-area">
                <Block img={blockImg_1} title={blockTitle_1} />
                <Block img={blockImg_2} title={blockTitle_2} />
                <Block img={blockImg_3} title={blockTitle_3} />
                <Block img={blockImg_4} title={blockTitle_4} />
            </div>
            <img style={{marginBottom:'40px', padding:"0px 10px"}} src={qvingOperationText} alt=""/>
            
        </div>
    )
}


export default Section6;