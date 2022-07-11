import { ProductBox } from "./storeStyle";
import AddToCartButton from "./CartButton";
import styled from "styled-components";

export default function Products({product, index }){
    return (
            <ProductBox key={index}>
                <ProductImgBox>
                    {
                        //<div className="info"><span>1 kg</span></div> Em Desenvolvimento
                    }
                    <img src={product.image} alt='' />
                    <AddToCartButton product={product}/>
                </ProductImgBox>
                <h2>R${product.preco}</h2>
                <span>{product.nome}</span>
            </ProductBox>
    )
}

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
    div.button{
        position: absolute;
        top: 100px;
        left:100px;
        height:35px;
        width:35px;
        background-color: #FF4791;
        border-radius:20px;
        float: right;
        h3{
            font-weight: 500;
            font-size: 25px;
            line-height: 24px;
            color: #ffffff;
        }
    }
`