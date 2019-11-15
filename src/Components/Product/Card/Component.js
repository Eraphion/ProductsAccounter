import React from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

import {DeleteProduct} from 'Actions/Creators';
import {getNavigation} from 'Routing'

const Card = ({name, quantity, price, description,id}) => {
    const dispatch = useDispatch();
    const {toEditProduct} = getNavigation(useHistory());
    const deleteProduct = () => dispatch(DeleteProduct(id));
    
    return (
        <li>
            <div className="productInfo">
                <p>Товар: {name}</p>
                <p>Осталось на складе: {quantity}</p>
                <p>Стоимость (р.): {price}</p>
                <p>Дополнительные сведения: {description}</p>
            </div>
            <div className="buttons">
                <button onClick={() => toEditProduct(id)}>Редактировать товар</button>
                <button onClick={deleteProduct}>Удалить товар</button>
            </div>
        </li>
    );
}

export default Card;