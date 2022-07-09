import { useState, useContext, useEffect } from "react";
import axios from "axios";

import UserContext from "../../contexts/UserContext";
import TokenContext from "../../contexts/TokenContext";

import styled from "styled-components";

export default function AddToCartButton({ product }){
    const { url } = useContext(UserContext);
    const [ item, setItem ] = useState(product);
    const [ isButtonDisable, setIsButtonDisable ] = useState(false);
    const [ changeButton, setChangeButton ] = useState(false);
    const [ number, setNumber ] = useState(0);

    function handleCostumerCart(type){
        setIsButtonDisable(true);
        const { token } = useContext(TokenContext);
        const clickType = {
            toCart: async () => {
                try{
                    const promisse = axios.post(`${url}carrinho`, item, token);
                    promisse.then(() => {
                        setChangeButton(true);
                        setNumber(1);
                        setIsButtonDisable(false);
                    })
                }catch(error){
                    console.log(error)
                }
            },
            adding: async () => {
                try{
                    const promisse = axios.put(`${url}carrinho`, item, token);
                    promisse.then(() => {
                        setNumber(number + 1);
                        setIsButtonDisable(false);
                    })
                }catch(error){
                    console.log(error)
                }
            },
            reduce: async () => {
                try{
                    const promisse = axios.put(`${url}carrinho`, item, token);
                    promisse.then(() => {
                        setNumber(number - 1);
                        setIsButtonDisable(false);
                    })
                }catch(error){
                    console.log(error)
                }
            },
            delete: async () => {
                try{
                    const promisse = axios.delete(`${url}carrinho`, item, token);
                    promisse.then(() => {
                        setChangeButton(false);
                        setNumber(0);
                        setIsButtonDisable(false);
                    })
                }catch(error){
                    console.log(error)
                }
            }
        }

        const buttonAction = clickType[type];
        buttonAction();

    }

    return(
        <>
            {
                changeButton
                ?   <Button className="haveOnCart">
                        {  
                            number > 1
                            ?   <button disabled={isButtonDisable} onClick={() => handleCostumerCart("reduce")}>-</button>
                            :   <button disabled={isButtonDisable} onClick={() => handleCostumerCart("delete")}><ion-icon name="trash-outline"></ion-icon></button>
                        }
                        <span>{number}</span>
                        <button disabled={isButtonDisable} onClick={() => handleCostumerCart("adding")}>+</button>
                    </Button>
                :   <Button>
                        <button disabled={isButtonDisable} onClick={() => handleCostumerCart("toCart")}>+</button>
                    </Button>
            }
        </> 
    )
}

const Button = styled.div`
    button{
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
    }
    display:flex;
    align-items:center;
    justify-content:center;
    height:35px;
    width:35px;
    background-color: #FF4791;
    border-radius:20px;
    transition: width 1s;

    h3{
        font-weight: 500;
        font-size: 25px;
        line-height: 24px;
        color: #ffffff;
    }

    &.haveOnCart{
        padding: 0 10px;
        width: 100px;
        display:flex;
        align-items center;
        justify-content: space-between;
    }
`