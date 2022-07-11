import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import UserContext from "../../contexts/UserContext";
import TokenContext from "../../contexts/TokenContext";


import styled from "styled-components";


export default function AddToCartButton({ product, productAmount }){
    const { url } = useContext(UserContext);
    const [ item, setItem ] = useState(product);
    const [ isButtonDisable, setIsButtonDisable ] = useState(false);
    const [ changeButton, setChangeButton ] = useState(false);
    const [ number, setNumber ] = useState(productAmount);
    const { token } = useContext(TokenContext);
    const navigate = useNavigate();
    console.log(item)
    useEffect(() =>  {
        setNumber(productAmount)
    }, [])

    function handleCostumerCart(type){
        setIsButtonDisable(true);
        if(!token){
            if(window.confirm('Aparentemente você não está em uma conta ou não possui uma, para colocar itens no carrinho você precisa estar em uma conta! Mover para tela de login?')){
                return navigate("/menu/login")
            }
            return 
        }
        const clickType = {
            toCart: async () => {
                try{
                    const promisse = axios.post(`${url}carrinho`, {...item, amount: 1}, token);
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
                    const promisse = axios.put(`${url}carrinho`, {...item, amount: 1}, token);
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
                    const promisse = axios.put(`${url}carrinho`, {...item, amount: -1}, token);
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
                    const promisse = axios.delete(`${url}carrinho`, {...item, amount: 1, productId:`${item.nome}.${item.categoria}.${item.tipo}`}, token);
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
                ?   <Button className="button haveOnCart">
                        {  
                            number > 1
                            ?   <button disabled={isButtonDisable} onClick={() => handleCostumerCart("reduce")}><ion-icon name="remove-outline"></ion-icon></button>
                            :   <button disabled={isButtonDisable} onClick={() => handleCostumerCart("delete")}><ion-icon name="trash-outline"></ion-icon></button>
                        }
                        <span>{number}</span>
                        <button disabled={isButtonDisable} onClick={() => handleCostumerCart("adding")}><ion-icon name="add-outline"></ion-icon></button>
                    </Button>
                :   <Button className="button">
                        <button disabled={isButtonDisable} onClick={() => handleCostumerCart("toCart")}><ion-icon name="add-outline"></ion-icon></button>
                    </Button>
            }
        </> 
    )
}

const Button = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:20px;
    transition: width 1s;
    button{
        width: 20px;
        height:20px;
    }
    ion-icon{
        width: 20px;
        height: 20px;
        color: #ffffff;
    }
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