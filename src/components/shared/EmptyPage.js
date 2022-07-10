import { useNavigate } from "react-router-dom";

import styled from "styled-components";

export default function EmptyPage({page}) {
    const navigate = useNavigate();
    const handleSearchProducts = () => navigate('/');

    return (
        <>
            {
                page == "trolley"
                    ? <Main>
                        <div>
                            <ion-icon name="cart-outline"></ion-icon>
                            <h1>Nenhum produto por aqui</h1>
                            <h3>Você ainda não adicionou nenhum produto a seu carrinho</h3>
                            <Button className="toProducts" onClick={handleSearchProducts}><span>Pesquisar produtos</span></Button>
                        </div>
                    </Main>
                    : <Main>
                        <div>
                            <ion-icon name="receipt-outline"></ion-icon>
                            <h1>Nenhum pedido feito ainda</h1>
                            <h3 className="receipt">Basta escolher os produtos que precissa e adicionar ao carrinho.Experimente!</h3>
                            <Button className="toProducts" onClick={handleSearchProducts}><span>Pesquisar produtos</span></Button>
                        </div>
                    </Main>
            }
        </>
    )
}

const Main = styled.main`
    padding: 80px 15px;
    min-height: 100vh;
    display:flex;
    flex-direction: column;
    aling-items:center;
    justify-content:center;
    ion-icon{
        width:70px;
        height: 70px;
        margin-bottom: 10px;
    }
    h1, h3{
        margin-bottom: 15px;
        font-family: 'Inter';
        font-style: italic;
    }
    h1{
        font-weight: 700;
        font-size: 19px;
        color: #000000;
    }
    h3{
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        max-width: 210px;
        color: rgba(0, 0, 0, 0.5);

    }
    h3.receipt{
        max-width: 280px;
    }
    div{
        display:flex;
        flex-direction: column;
        align-items:center;
    }
`

const Button = styled.button`
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    display:flex;
    align-items:center;
    justify-content:center;
    width:315px;
    height: 50px;
    background-color: #FF4791;
    border-radius: 50px;
    span{
        font-family: 'Inter';
        font-style: italic;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        color: #FFFFFF;
    }
`