import styled from "styled-components";
import React from "react";
import UserContext from "../../contexts/UserContext";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Carousel from 'react-elastic-carousel'

export default function HomePage(){
    
    const { url } = React.useContext(UserContext);
    const [ categories, setCategories ] = React.useState([]);

    const navigate = useNavigate();

    React.useEffect(() => {
        axios.get(`${url}getAllCategories`)
        .then(res => {
            console.log(res.data);
            setCategories(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    return(
        <Container>
            {/* Esse component pode ser substituido no futuro, ele pode ser visto como um placeholder */}
            <Top>DrivenFastMarket</Top>
            <Corpo>
                <Carousel className="carousel">
                    <Banner>
                        <img src="https://user-images.githubusercontent.com/32857/45157943-dd516d00-b1b8-11e8-97e7-a66c7addd011.jpg" alt="banner"/>
                    </Banner>
                    <Banner>
                        <img src="https://desenhos.band.uol.com.br/wp-content/uploads/2017/04/Kwik-E-mart.png" alt="banner"/>
                    </Banner>
                    <Banner>
                        <img src="https://user-images.githubusercontent.com/32857/45157943-dd516d00-b1b8-11e8-97e7-a66c7addd011.jpg" alt="banner"/>
                    </Banner>
                </Carousel>
                <Categories>
                    {categories.map((category, index) => {
                        return(
                            <Link to={`/${category._id}`} key={index} style={{ textDecoration: 'none' }}>
                                <div>
                                    <img src={category.image} alt="banner"/>
                                    <h3>{category._id}</h3>
                                </div>
                            </Link>
                        )
                    })}
                </Categories>
            </Corpo>
            
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100%;
`;



const Top = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    background: #FF4791;
    box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 10px 10px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    font-family: 'Finlandica', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 50px;
    margin-bottom: 40px;
    color: white;
    align-items: center;
    justify-content: center;
`
const Corpo = styled.div`
    margin-top: 100px;

    .rec.rec-carousel-wrapper {
        width: 100%;
    }

    .rec.rec-arrow {
        display: none;
    }

    .rec.rec-slider-container {
        width: 345px;
        height: 164px; 
    }

    .rec.rec-dot {
        width: 5px;
        height: 5px;
        background: #D9D9D9;
    }
`;

const Banner = styled.div`
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // margin-top: 20px;
    img {
        width: 345px;
        height: 164px;
        border-radius: 10px;
        object-fit: cover; 
    }
`;

const Categories = styled.div`
    width: 345px;
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    justify-content: space-between;
    text-align: center;
    font-family: 'Inter', 'sans-serif';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: red;
    line-height: 16px;
    word-wrap: break-word;
    margin-left: 10px;


    h3 {
        font-family: 'Inter', 'sans-serif';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        color: black;
    }

    img {
        width: 105px;
        height: 105px;
        border-radius: 8px;
        margin-top: 20px;
        
    }
`;