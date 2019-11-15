import React from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {getNavigation} from 'Routing';
import {ProductReducer} from 'Reducers/Naming';

const DetailedProduct = () => {
    const {toProductTable} = getNavigation(useHistory());

    const {id} = useParams(); 
    const productCard = useSelector(state => state[ProductReducer]).find(product => product.id === parseInt(id));
    const {name, quantity, price, description} = productCard;
    
    return (
        <div>
            <div className="productInfo">
                <p>Товар: {name}</p>
                <p>Осталось на складе: {quantity}</p>
                <p>Стоимость (р.): {price}</p>
                <p>Особенности: {description}</p>
            </div>
            <button onClick={toProductTable}>Вернуться</button>
        </div>
    );
}

export default DetailedProduct;