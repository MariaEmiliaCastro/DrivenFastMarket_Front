import { useState, useContext, useEffect } from "react";
import axios from "axios";
import TokenContext from "../../../contexts/TokenContext";
import UserContext from "../../../contexts/UserContext";

import { ItensList } from "./TrolleyStyle";

export default function ProductsList({ product, handleCostumerCart }) {
    const [item, setItem] = useState(product);
    const [waitClick, setWaitClick] = useState(false);
    const { token } = useContext(TokenContext);
    const { url } = useContext(UserContext);
    
    function handleClick(type){
        setWaitClick(true);
        
        const clickType = {
            adding: async () => {
                try{
                    const promisse = axios.put(`${url}carrinho`, {
                        nome: item.nome,
                        preco: item.preco,
                        descricao: item.descricao,
                        image: item.image,
                        categoria: item.categoria,
                        tipo: item.tipo,
                        amount: 1
                    }, token);
                    promisse.then(() => {
                        handleCostumerCart()
                    })
                }catch(error){
                    console.log(error)
                }
            },
            reduce: async () => {
                try{
                    const promisse = axios.put(`${url}carrinho`, {
                        nome: item.nome,
                        preco: item.preco,
                        descricao: item.descricao,
                        image: item.image,
                        categoria: item.categoria,
                        tipo: item.tipo,
                        amount: -1
                    }, token);
                    promisse.then(() => {
                        handleCostumerCart()
                    })
                }catch(error){
                    console.log(error)
                }
            },
            delete: async () => {
                try{
                    const promisse = axios.delete(`${url}carrinho/${item._id}` , token);
                    promisse.then(() => {
                        handleCostumerCart()
                    })
                }catch(error){
                    console.log(error)
                }
            }
        }
        
        const buttonAction = clickType[type];
        buttonAction();

    }
    

    return (
        <ItensList> {/* Componetizar dps */}
            <div className="infosContainer">
                <img src={item.image} alt={item.nome} />
                <div className="Infos">
                    <h2>R$ {item.preco * item.amount}</h2>
                    <h3>{item.nome}</h3>
                </div>
            </div>
            <div className="ProductHandle">
                {
                    item.amount === 1
                    ?   <ion-icon disabled={waitClick} name="trash-outline" onClick={() => handleClick("delete")}></ion-icon>
                    :   <ion-icon disabled={waitClick} name="remove-outline" onClick={() => handleClick("reduce")}></ion-icon>
                }
                <span>{item.amount}</span>
                <ion-icon disabled={waitClick} name="add-outline" onClick={() => handleClick("adding")}></ion-icon>
            </div>
        </ItensList>
    )
}