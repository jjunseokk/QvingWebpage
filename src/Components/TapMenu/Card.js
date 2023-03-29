// --------section3.js(큐빙 상품 슬라이드 카드 컴포넌트)----------


import React from "react";
import styled from "styled-components";


const Container = styled.div`
    width: 100%;
    height: 340px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width : 1440px){
        height: 270px;
        img{
            width : 80%;
        }
    }

    @media screen and (max-width: 767px) { 
        width: 290px;
        height: 110px;
    }
`
const Card = (props) => {
    return (
        <Container>
            <img src={props.img} alt="" />
        </Container>
    )
}


export default Card;