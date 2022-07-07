import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import Footer from "../shared/Footer"

export default function MenuPage(){
    const navigate = useNavigate();

    const goToLogin = () => navigate("/menu/login")
    const alert = () => window.alert('Sobre construção');

    return(
        <Body>
            <Header>
                <ion-icon name="person-circle-sharp"></ion-icon>
                <h1 onClick={goToLogin}>Entrar</h1>
            </Header>
            <Divisor/>
            <Main>
                <Container>
                    <ion-icon name="ellipsis-horizontal-sharp" onClick={alert}></ion-icon>
                    <span onClick={alert}>Sobre nós</span>
                </Container>
                <Container>
                    <ion-icon name="chatbubble-outline"onClick={alert}></ion-icon>
                    <span onClick={alert}>Suporte</span>
                </Container>
                <Container>
                    <ion-icon name="newspaper-outline"onClick={alert}></ion-icon>
                    <span onClick={alert}>Termos de uso</span>
                </Container>
                <Container >
                    <ion-icon name="shield-outline" onClick={alert}></ion-icon>
                    <span onClick={alert}>Política de privacidade</span>
                </Container>
            </Main>
            <Footer />
        </Body>
        
    )
}

const Body = styled.div`
    display:flex;
    flex-direction:column;
    padding:15px;
`
const Main = styled.main`
    section:nth-child(1){
        margin-top:0px;
    }
`
const Divisor = styled.div`
    margin: 30px 0;
    width:100%;
    border-top:1px solid #ff4791;
`
const Container = styled.section`
    display:flex;
    align-items:center;
    margin-top:30px;
    ion-icon{
        width:35px;
        height:35px;
    }
    span{
        margin-left: 20px;
        font-weight: 300;
        font-size: 20px;
        line-height: 19px;
        color: #000000;
    }
`
const Header = styled.header`
    display:flex;
    align-items:center;
    margin-top: 25px;
    ion-icon{
        color: #FF8BBA;
        width:80px;
        height:80px;
    }
    h1{
        margin-left: 20px;
        font-weight: 700;
        font-size: 29px;
        line-height: 29px;
        color: #FF4791;
    }
`