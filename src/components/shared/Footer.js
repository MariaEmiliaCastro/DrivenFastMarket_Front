import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Footer() {
    return (
        <Container>
            <LinksSections>
                    <ion-icon name="storefront-outline"></ion-icon>
                    <h2>Loja</h2>
            </LinksSections>
            <LinksSections>
                    <ion-icon name="cart-outline"></ion-icon>
                    <h2>Carrinho</h2>
            </LinksSections>
            <LinksSections>
                    <ion-icon name="receipt-outline"></ion-icon>
                    <h2>Pedidos</h2>
            </LinksSections>
            <LinksSections>
                    <ion-icon name="person-outline"></ion-icon>
                    <h2>Menu</h2>
            </LinksSections>
        </Container>
    )
}

const Container = styled.footer`
    display:flex;
    align-items:center;
    justify-content: space-evenly;
    position:fixed;
    bottom: 0;
    left: 0;
    width:100%;
    height:85px;
    background: #FFFFFF;
    box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.25);
    padding: 15px;
`
const LinksSections = styled.section`
        color: inherit;
        text-decoration: inherit;
        height:100%;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        ion-icon{
            margin-bottom: 10px;
            width:30px;
            height:30px;
        }
        h2{
            font-weight: 300;
            font-size: 15px;
            line-height: 17px;
            color: #000000;
        }
`

//Depois mover reset do button para global style;
