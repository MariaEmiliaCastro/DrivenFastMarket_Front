import styled from "styled-components";

const Main = styled.main`
    padding: 80px 15px;
    min-height: 100vh;
    display:flex;
    flex-direction: column;
    &.empty{
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

        div{
            display:flex;
            flex-direction: column;
            align-items:center;
        }
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
const Section = styled.section`
    display: flex;
    align-items:center;
    justify-content:space-between;
    h1, h2, span{
        font-weight: 700;
        line-height: 17px;
    }
    h1, span{
        color: #FF4791;
        font-size: 16px;
    }
    ion-icon{
        width: 25px;
        height: 25px;
        margin-right: 5px;
        color: #FF4791;
    }
    div.extraInteractions{
        display:flex;
        align-items:center;
    }
    span.cupomCode{
        color: #FF80B3;
        word-wrap: break-word;
    }
`
const Container = styled.div`
    display:flex;
    flex-direction: column;
    h1{
        font-size: 13px;
        margin-bottom: 10px;
    }
    h2{
        font-size: 16px;
        color: #FF80B3;
        margin-bottom: 5px;
    }
    h3{
        font-weight: 200;
        font-size: 15px;
        line-height: 17px;
        color: #000000;
        margin-bottom: 3px;
    }
    h1.cupom{
        margin-bottom: 0px;
    }
    &.result{
        width: 100%;
    }
    div.result{
        margin: 5px 0;
        width: 100%;
        display:flex;
        align-items:center;
        justify-content:space-between;
        &:first-of-type{
            margin-top: 0px;
        }
        &:last-of-type{
            margin-top: 15px;
            margin-bottom: 0px;
        }
        h1,h2,h3{font-size: 17px;}
            
        h3{
            font-weight: 500;
            color: #d3d3d3;
        }
    }
`
const Divisor = styled.div`
    margin: 20px 0;
    border-top: 1px solid #FF80B3;
    width: 100px;
    &.moreSpace{
        margin-top: 50px;
    }
`
const List = styled.ul`
    li{
        margin: 15px 0;
    }
    li:first-of-type{
        margin-top: 0px;
    }
    li:last-of-type{
        margin-bottom: 0px;
    }
`
const ItensList = styled.li`
    display:flex;
    align-items: center;
    justify-content: space-between;
    width: 345px;
    div.infosContainer{
        display:flex;
        align-items: center;
        img{
            width: 50px;
            height: 50px;
            margin-right: 20px;
        }
        h2, h3{
            margin: 0px;
        }
        div.Infos{
            min-height: 40px;
            display:flex;
            flex-direction: column;
            justify-content:space-between;
        }
    }

    div.ProductHandle{
        display:flex;
        align-items:center;
        width: 120px;
        margin-left: 10px;
        justify-content:space-between;
        ion-icon{
            width: 20px;
            height: 20px;
        }
        span{
            font-weight: 700;
            font-size: 21px;
        }
    }
`

export { Main, Button, Section, Container, Divisor, List, ItensList }