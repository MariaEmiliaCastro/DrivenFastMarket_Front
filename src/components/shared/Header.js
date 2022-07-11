import styled from "styled-components"

export default function PageHeader({page, type }){

    return(
        <Header className={type}>
            {
                (page === "Carrinho" || page === "Pedidos")
                ?   <></>
                :   <ion-icon name="chevron-back-outline"></ion-icon>
            }
            <h1>{page}</h1>
            {
                (page === "Carrinho" || page === "Pedidos" || page === "Pagamento")
                ? <></>
                : <ion-icon name="search-outline"></ion-icon>
            }
        </Header>
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
    padding: 0 10px;
    ion-icon{
        width: 35px;
        height: 35px;
        color: #FF4791;
    }
    h1{
        font-family: 'Finlandica',sans-serif;
        font-weight: 700;
        font-size: 21px;
        line-height: 29px;
        color: #FF4791;
    }
    &.title{
        justify-content:center;
    }
`