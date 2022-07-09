import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios";

import TokenContext from '../../contexts/TokenContext';
import UserContext from '../../contexts/UserContext';

import styled from "styled-components";
import { Header, ProductBox } from "../shared/storeStyle";

export default function ProductCategoryPage() {
    const { categoriaProduto } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);

    const { url } = useContext(UserContext)
    const { token } = useContext(TokenContext);
    const navigate = useNavigate();

    const devToken = "fc0f83f8-c516-4b38-90e4-fb9ce3657cd5"

    useEffect(() => {
        //if(!token){return navigate('/menu/login')};
        setIsLoading(true);
        function handleLoadingPage() {
            const promisse = axios.get(`${url}getAllProductsByCategory/${categoriaProduto}`, { categoria: categoriaProduto }, token);
            promisse.then((res) => {
                setProducts(res.data);
                setIsLoading(false)
            })
            promisse.catch((erro) => {
                console.log('Pagina não existe movendo para HomePage');
                navigate('/')
            })
        }
        handleLoadingPage()
    }, [])
    console.log(products)

    const handleSeeMore = (x) => { navigate(`/${categoriaProduto}/${x}`) };
    const handleLastPage = (place) => { navigate(place) };
    function handleTransaction() {
        window.alert('Oi')
    }

    return (
        <Body>
            {
                isLoading
                    ? <></>
                    : <>
                        <Header>
                            <ion-icon name="chevron-back-outline" ></ion-icon>
                            <h1>{categoriaProduto}</h1>
                            <ion-icon name="search-outline"></ion-icon>
                        </Header>
                        <NavBar>
                            <ul>
                                {
                                    products.map((array, index) => {
                                        return (<li className="info" key={index}><span>{array.tipo}</span></li>)
                                    })
                                }
                            </ul>
                        </NavBar>
                        <Main>
                            {
                                products.map((array, index) => {
                                    return (
                                        <Section key={index}>
                                            <TitleContainer>
                                                <span className="type">{array.tipo}</span>
                                                <h3 onClick={() => handleSeeMore([array.tipo])}>VER MAIS</h3>
                                            </TitleContainer>
                                            <ProductContainer>
                                                { //Componetizar Depois
                                                    array.produtos.map((product, index) => {
                                                        return (
                                                            <ProductBox key={index}>
                                                                <ProductImgBox>
                                                                    <div className="info"><span>1 kg</span></div>
                                                                    <img src={product.image} alt='' />
                                                                    <button onClick={handleTransaction}><h3>+</h3></button>
                                                                </ProductImgBox>
                                                                <h2>R${product.preco}</h2>
                                                                <span>{product.nome}</span>
                                                            </ProductBox>

                                                        )
                                                    })
                                                }
                                            </ProductContainer>
                                        </Section>
                                    )
                                })
                            }
                        </Main>
                    </>
            }

        </Body>
    )
}

const Body = styled.div`
    button{
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
    }
    .info{
        display:flex;
        align-items: center;
        justify-content:center;
        border: 1px solid #FF4791;
        border-radius: 10px;
        span{
            font-weight:300;
            font-size: 18px;
            line-height: 18px;
            color: #FF4791;
        }
    }
`
const NavBar = styled.nav`
    z-index: 1;
    position: fixed;
    top: 70px;
    left: 0px;
    width: 100%;
    overflow-y: hidden;
    background-color: #ffffff;
    ul{
        padding: 0 15px;
        display:flex;
        li:first-of-type{
            margin-left:0;
        }
        li:last-of-type{
            margin-right:0;
        }
        li{
            background-color: #ffffff;
            padding: 10px;
            margin: 0 5px;
            height: 40px;
        }
    }
    
`
const Main = styled.main`
    margin-top: 120px;
    margin-bottom: 90px;
`
const Section = styled.section`
    display:flex;
    flex-direction: column;
    margin: 60px 0;
    &:first-of-type{
        margin-top: 0px;
    }
    &:last-of-type{
        margin-bottom: 0px;
    }
`
const TitleContainer = styled.div`
    padding: 0 15px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
    span{
        font-weight: 500;
        font-size: 25px;
        line-height: 24px;
        color: #000000;
    }
    h3{
        font-weight: 700;
        font-size: 15px;
        color:#FF4791;
    }
`
const ProductContainer = styled.ul`
    padding: 0 15px;
    width:100%;
    overflow-y:hidden;
    display:flex;
    li:first-of-type{
        margin-left: 0px;
    }
    li:last-of-type{
        margin-right: 0px;
    }

`
const ProductImgBox = styled.div`
    position:relative;
    padding: 15px;
    img{
        box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.01);
        width:105px;
        height:105px;
    }
    div.info{
        background-color: #FFFFFF;
        position: absolute;
        top: 7.5px;
        left: 87.5px;
        padding: 0px 5px;
        border-radius: 12.5px;
        height: 25px;
        span{
            font-weight: 400;
            font-size: 15px;
            line-height: 15px;
        }
    }
    button{
        position: absolute;
        top: 100px;
        left:100px;
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
    }
`