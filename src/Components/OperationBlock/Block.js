// -----------------section6.js (큐빙 간편 운영 방법) 블록--------


import React from "react";
import styled from "styled-components";
import '../../Style/section6.scss'



const BlockArea = styled.div`
    width: 265px;
    height: 410px;
`;

const Block = (props) => {
    return (
        <BlockArea>
            <div className="block">
                <div className="blockImg"> 
                    <img src={props.img} alt="" />
                </div>
                <div className="blockTitle">
                    <img src={props.title} alt="" />
                </div>
            </div>
        </BlockArea>
    )
}


export default Block;