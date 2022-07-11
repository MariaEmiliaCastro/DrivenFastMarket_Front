import { Link } from "react-router-dom";
import styled from "styled-components";

export default function PageFooter({ pagePlace }) {

    return (
        <Container>
            <LinksSections>
                <Link to="/" className={pagePlace === "Loja" ? "selected" : ""}>
                    <ion-icon name="storefront-outline"></ion-icon>
                    <h2>Loja</h2>
                </Link>
            </LinksSections>
            <LinksSections>
                <Link to="/carrinho" className={pagePlace === "Carrinho" ? "selected" : ""}>
                    <ion-icon name="cart-outline"></ion-icon>
                    <h2>Carrinho</h2>
                </Link>
            </LinksSections>
            <LinksSections>
                <Link to="/pedidos" className={pagePlace === "Pedidos" ? "selected" : ""}>
                    <ion-icon name="receipt-outline"></ion-icon>
                    <h2>Pedidos</h2>
                </Link>
            </LinksSections>
            <LinksSections>
                <Link to="/menu" className={pagePlace === "Menu" ? "selected" : ""}>
                    <ion-icon name="person-outline"></ion-icon>
                    <h2>Menu</h2>
                </Link>
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
    padding: 15px 0px;
`
const LinksSections = styled.section`
    a{
        color: inherit;
        text-decoration: inherit;
        height:100%;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        ion-icon{
            margin-bottom: 5px;
            width:30px;
            height:30px;
            color: #343434;
        }
        h2{
            font-weight: 300;
            font-size: 13px;
            line-height: 17px;
            color: #000000;
        }
        &.selected{
            ion-icon, h2{
                color: #FF4791;
            }
            h2{font-family: 'Finlandica',sans-serif;}
        }
    }
`

//Depois mover reset do button para global style;
