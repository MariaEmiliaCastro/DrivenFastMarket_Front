import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import TokenContext from '../../contexts/TokenContext';
import UserContext from '../../contexts/UserContext';

import PageHeader from "../shared/Header";
import TrolleyMain from "../pageComponents/TrolleyPage/TrolleyMain";
import EmptyPage from "../shared/EmptyPage";

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
    useEffect(() => {
        if(!token){return }
        else{handleCostumerCart()};
    }, []);



    return(
        <>
        {
            pageIsLoading
            ? <></>
            :   <>
                    <PageHeader page="Carrinho" type="title"/>
                    {
                        costumerCart.products.length === 0
                        ?   <EmptyPage page="trolley"/>
                        :   <TrolleyMain costumerCart={costumerCart} costumerInfos={costumerInfos} handleCostumerCart={handleCostumerCart}/>
                    }
                </>
        }
        </>
    )
}

