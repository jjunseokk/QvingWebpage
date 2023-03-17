import React from "react";
import styled from "styled-components";


const Container = styled.div`
    width: 100%;
    height: 340px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 425px) { 
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