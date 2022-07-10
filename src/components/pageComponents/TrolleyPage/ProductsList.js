import { useState } from "react";
import { ItensList } from "./TrolleyStyle";

export default function ProductsList({ product, handleCostumerCart }) {
    const [product, setProduct] = useState(product);
    
    function handleProductChange(){
    }
    

    return (
        <ItensList> {/* Componetizar dps */}
            <div className="infosContainer">
                <img src={product.image} alt={product.nome} />
                <div className="Infos">
                    <h2>R$ {product.preco * product.amount}</h2>
                    <h3>{product.nome}</h3>
                </div>
            </div>
            <div className="ProductHandle">
                {
                    product.amount === 1
                    ?   <ion-icon name="remove-outline"></ion-icon>
                    :   <ion-icon name="remove-outline"></ion-icon>
                }
                <span>{amount}</span>
                <ion-icon name="add-outline"></ion-icon>
            </div>
        </ItensList>
    )
}