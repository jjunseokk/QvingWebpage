import React from "react";
import styled from "styled-components";


const Container = styled.div`
    width: 100%;
    height: 340px;
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
`
const Card = (props) => {
    return (
        <Container>
                <img src={props.img} alt="" />
        </Container>
    )
}


export default Card;