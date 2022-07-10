import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import TokenContext from '../../contexts/TokenContext';
import UserContext from '../../contexts/UserContext';

import styled from "styled-components";
import { Main, Button } from "../pageComponents/TrolleyPage/TrolleyStyle"
import TrolleyMain from "../pageComponents/TrolleyPage/TrolleyMain";

export default function TrolleyPage(){
    const [costumerCart, setCostumerCart] = useState({products:[]});
    const [costumerInfos, setCostumerInfos] = useState([]);
    const [pageIsLoading, setPageIsLoading] = useState(false);

    const navigate = useNavigate();
    const { token } = useContext(TokenContext);
    const { url } = useContext(UserContext);

    const handleCostumerCart = () =>{
        setPageIsLoading(true)
        const promisse = axios.get(`${url}carrinho`, token);
        promisse.then((res) => {
            setCostumerCart(res.data);
            setPageIsLoading(false)
        });
        promisse.catch((error) => {
            navigate("/");
        });
    }
    /* 
    useEffect(() => {
        //if(!token){return navigate('/menu/login')};

        handleCostumerCart()

    }, []);
    */

    const handleSearchProducts = () => navigate('/');

    return(
        <>
        {
            pageIsLoading
            ? <></>
            :   <>
                    <Header className="title">
                        <h1>Carrinho</h1>
                    </Header>
                    {
                        costumerCart.products.length === 1
                        ?   <Main className="empty">
                                <div>
                                    <ion-icon name="cart-outline"></ion-icon>
                                    <h1>Nenhum produto por aqui</h1>
                                    <h3>Você ainda não adicionou nenhum produto a seu carrinho</h3>
                                    <Button className="toProducts" onClick={handleSearchProducts}><span>Pesquisar produtos</span></Button>
                                </div>
                            </Main> 
                        :   <TrolleyMain costumerCart={costumerCart} costumerInfos={costumerInfos} handleCostumerCart={handleCostumerCart}/>
                    }
                </>
        }
        </>
    )
}

const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 70px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    background-color: #FFFFFF;
    padding: 10px;
    ion-icon{
        width: 40px;
        height: 40px;
        color: #FF4791;
    }
    h1{
        font-family: 'Inter', 'sans-serif';
        font-weight: 700;
        font-size: 21px;
        line-height: 29px;
        color: #FF4791;
    }
    &.title{
        justify-content:center;
    }
`