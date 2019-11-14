import React from 'react';
import {useDispatch} from 'react-redux';

import {DeleteProduct} from 'Actions/Creators';

const Card = ({name, quantity, price, id}) => {
    const dispatch = useDispatch();
    const deleteProduct = () => dispatch(DeleteProduct(id));
    
    return (
        <li>
            <div className="productInfo">
                <p>Название товара: {name}</p>
                <p>Количество на складе: {quantity}</p>
                <p>Цена (р.): {price}</p>
            </div>
            <div className="buttons">
                <button>Редактировать товар</button>
                <button onClick={deleteProduct}>Удалить товар</button>
            </div>
        </li>
    );
}

export default Card;