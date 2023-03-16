import React from "react";
import styled from "styled-components";
import '../../Style/section6.css'



const BlockArea = styled.div`
    width: 265px;
    height: 410px;
    /* border: 1px solid red; */
    
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