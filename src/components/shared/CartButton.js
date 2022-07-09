


import styled from "styled-components";

export default function AddToCartButton(){
    return(
        <Button>+</Button>
    )
}

const Button = styled.button`
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    height:35px;
    width:35px;
    background-color: #FF4791;
    border-radius:20px;
    h3{
        font-weight: 500;
        font-size: 25px;
        line-height: 24px;
        color: #ffffff;
    }
`