import axios from "axios";
import ProductsList from "./ProductsList";

import { Main, Section, Container, Divisor, List, ItensList } from './TrolleyStyle'

export default function TrolleyMain({ costumerCart, costumerInfos, handleCostumerCart}) {

    const handleFeatInConstruction = () => window.alert('Essa função foi desativada temporariamente. Desculpe pelo transtorno!');

    return (
        <Main>
            <Section>
                <Container>
                    <h1>ENDEREÇO</h1>
                    <div >
                        <h2>Rua conde de Bomfim, 667</h2> {/* Endereço e numero */}
                        <h3>Tijuca - Rio de Janeiro</h3> {/* Bairro / Cidade */}
                        <h3>Casa 9</h3> {/*Complemento*/}
                    </div>
                </Container>
                <div className="extraInteractions">
                    <ion-icon name="repeat-outline"></ion-icon>
                    <span>TROCAR</span>
                </div>
            </Section>
            <Divisor />
            <Section>
                <Container>
                    <h1 className="cupom">CUPOM</h1>
                </Container>
                <span className="cupomCode"></span>
                <div className="extraInteractions">
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <span onClick={handleFeatInConstruction}>ADICIONAR</span>
                </div>
            </Section>
            <Divisor />
            <Section>
                <Container>
                    <h1>ITENS</h1>
                    <List>
                        {costumerCart.products.map(product => <ProductsList product={product} handleCostumerCart={handleCostumerCart}/>)}
                    </List>
                </Container>
            </Section>
            <Divisor className="moreSpace" />
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
                        <h1>R$ {costumerCart.subtotal + 5.00}</h1>
                    </div>
                </Container>
            </Section>
        </Main>
    )
}