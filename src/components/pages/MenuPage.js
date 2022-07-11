import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import UserContext from "../../contexts/UserContext";

import PageFooter from "../shared/PageFooter";

export default function MenuPage(){
    const { user } = useContext(UserContext);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if(user){setIsUserLoggedIn(true)};
    }, [])

    const goToLogin = () => navigate("/menu/login")
    const alert = () => window.alert('Em construção');

    return(
        <Body>
            <Header>
                <ion-icon name="person-circle-sharp"></ion-icon>
                <h1 onClick={goToLogin}>Entrar</h1>
                {isUserLoggedIn
                ? <>
                    <ion-icon name="person-circle-sharp"></ion-icon>
                    <div>
                        <h1>{user.name}</h1>
                        <span>{user.email}</span>
                    </div>
                </>
                : <></>
                }
            </Header>
            
            <Main>
                <Divisor/>
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
                {isUserLoggedIn
                ? <>
                    <Divisor/>
                    <Container>
                        <ion-icon name="log-out-outline" onClick={alert}></ion-icon>
                        <span onClick={alert}>Sair</span>
                    </Container>
                </>
                : <></>
                }
            </Main>
            <PageFooter pagePlace="Menu" />
        </Body>
        
    )
}

const Body = styled.div`
    display:flex;
    flex-direction:column;
    padding:15px;
`
const Main = styled.main`
`
const Divisor = styled.div`
    margin: 30px auto;
    width:90%;
    border-top:1px solid #dddddd;
`
const Container = styled.section`
    display:flex;
    align-items:center;
    margin-top:35px;
    ion-icon{
        width:25px;
        height:25px;
    }
    span{
        margin-left: 20px;
        font-weight: 300;
        font-size: 18px;
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
        font-family: 'Finlandica',sans-serif;
        margin-left: 20px;
        font-weight: 700;
        font-size: 29px;
        line-height: 29px;
        color: #FF4791;
    }
    div{
        display:flex;
        flex-direction:column;
    }
`