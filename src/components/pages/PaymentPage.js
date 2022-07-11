import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import TokenContext from '../../contexts/TokenContext';
import UserContext from '../../contexts/UserContext';

import PageHeader from "../shared/Header";
import TrolleyMain from "../pageComponents/TrolleyPage/TrolleyMain";
import EmptyPage from "../shared/EmptyPage";
import { ToastContainer, toast } from 'react-toastify';

import { Main, Section, Container, Divisor, List, ItensList } from '../pageComponents/TrolleyPage/TrolleyStyle'
import styled from "styled-components";

export default function PaymentPage(){
    
    const [costumerCart, setCostumerCart] = useState({products:[]});
    const [costumerInfos, setCostumerInfos] = useState([]);
    const [pageIsLoading, setPageIsLoading] = useState(false);
    const [customerCPF, setCustomerCPF] = useState('Insira seu CPF');
    const [cpfModal, setCpfModal] = useState(false);
    const [meioDePagarModal, setMeioDePagarModal] = useState(false);
    const [ paymentInfo, setPaymentInfo ] = useState({});

    const navigate = useNavigate();
    const { token } = useContext(TokenContext);
    const { url } = useContext(UserContext);

    useEffect(() => {
        const promise = axios.get(`${url}carrinho`, token);
        promise.then((res) => {
            setCostumerCart(res.data);
            setPageIsLoading(false)
        });
        promise.catch((error) => {
            navigate("/");
        });
    }, []);

    const sendOrder = async () => {
        setPageIsLoading(true);
        console.log(paymentInfo);
        if(paymentInfo.cardNumber === undefined || paymentInfo.cardNumber === '' || paymentInfo.cardName === undefined || paymentInfo.cardName === '' || paymentInfo.cardSecurityCode === undefined || paymentInfo.cardSecurityCode === '' || paymentInfo.cardValidade === undefined || paymentInfo.cardValidade === '' || customerCPF === undefined || customerCPF === ''){
            alert('Preencha todos os campos para continuar');
            return;
        }else{
            const response = await axios.post(`${url}checkout`, {
                costumerCart,
                costumerInfos,
                paymentInfo
            },token);
            setPageIsLoading(false);
            toast.success('🛒 Pedido realizado com sucesso!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            console.log(response);
            navigate('/');
        }
    }

    return(
        <>
        {/* {
            pageIsLoading
            ? <></>
            :   <>
                    <PageHeader page="Carrinho" />
                    {
                        costumerCart.products.length === 1
                        ?   <EmptyPage page="trolley"/>
                        :   <TrolleyMain costumerCart={costumerCart} costumerInfos={costumerInfos} handleCostumerCart={handleCostumerCart}/>
                    }
                </>
        } */}
        <PageHeader page="Pagamento" />
        <Main>
            <Section>
                <Container>
                    <h1 style={{fontSize: '15px'}}>SACOLA</h1>
                    {costumerCart.products.map((product) => <div><span style={{fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '400',color: '#808080'}}>{product.nome}   x   {product.amount}</span><br/><span style={{fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '200', color: '#808080', fontSize:'14px'}}>Valor unitário: R$ {product.preco}</span></div> )}
                </Container>
            </Section>
            <Divisor />
            <Section>
                <Container>
                    <h1 style={{fontSize: '15px'}}>PAGAMENTO</h1>
                    <span>Cartão de crédito</span>
                </Container>
                <Container>
                    <div className="extraInteractions">
                        <span style={{fontSize: '15px'}} onClick={() => setMeioDePagarModal(!meioDePagarModal)}>INSERIR DADOS</span>
                    </div>
                </Container>
            </Section>
            <Divisor />
            <Section>
                <Container>
                    <h1 style={{fontSize: '15px'}}>CPF</h1>
                    <span style={{fontSize: '14px'}} onClick={() => setCpfModal(!cpfModal)}>{customerCPF}</span>
                </Container>
            </Section>
            <Divisor/>
            <Section>
                <Container className="result">
                    <div className="result">
                        <h3>Subtotal</h3>
                        <h3>R$ {costumerCart.subtotal}</h3>
                    </div>
                    <div className="result">
                        <h2>Taxa de entrega</h2>
                        <h2>R$ 5,00</h2>
                    </div>
                    <div className="result">
                        <h1>TOTAL</h1>
                        <h1>R$ {(costumerCart.subtotal + 5.00).toFixed(2)}</h1>
                    </div>
                </Container>
            </Section>
            <FinalizarPedido>
                <button onClick={sendOrder}>Fazer pedido</button>
            </FinalizarPedido>
            <Card visible={cpfModal}>
                <input type="text" placeholder="Digite seu CPF" onChange={(e) => setCustomerCPF(e.target.value)}/>
                <button onClick={() => setCpfModal(!cpfModal)}>Confirmar</button>
            </Card>
            <Card visible={meioDePagarModal} style={{height:'300px'}}>
                {/* Capturar os dados de cartão do user */}
                <input required type="text" placeholder="Número do cartão" onChange={(e) => setPaymentInfo({...paymentInfo, cardNumber: e.target.value})}/>
                <input required type="text" placeholder="Nome do titular" onChange={(e) => setPaymentInfo({...paymentInfo, cardName: e.target.value})}/>
                <input required type="text" placeholder="Validade" onChange={(e) => setPaymentInfo({...paymentInfo, cardValidade: e.target.value})}/>
                <input required type="text" placeholder="Código de segurança" onChange={(e) => setPaymentInfo({...paymentInfo, cardSecurityCode: e.target.value})}/>
                <button onClick={() => setMeioDePagarModal(!meioDePagarModal)}>Confirmar</button>
            </Card>
        </Main>
        <ToastContainer />                  
        </>
    )
}

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 150px;
    box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.25);
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
    visibility: ${props => props.visible ? 'visible' : 'hidden'};
    z-index: ${props => props.visible ? '10' : '-1'};
    input {
        width: 80%;
        height: 40px;
        border: 1px solid lightgray;
        border-radius: 10px;
        margin-bottom: 10px;
        padding: 0 10px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 200;
        font-size: 14px;
        line-height: 17px;
    }

    button {
        width: 80%;
        height: 40px;
        border: none;
        border-radius: 10px;
        background-color: #FF4791;;
        color: white;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 200;
        font-size: 14px;
        line-height: 17px;
        cursor: pointer;
    }
`

const FinalizarPedido = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80px;
    opacity: 0.8;
    box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.25);
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;

    button {
        width: 80%;
        height: 40px;
        border: none;
        border-radius: 10px;
        background-color: #FF4791;
        color: white;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 200;
        font-size: 14px;
        line-height: 17px;
        cursor: pointer;
    }
`