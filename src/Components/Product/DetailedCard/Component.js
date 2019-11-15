import React from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {getNavigation} from 'Routing';
import {ProductReducer} from 'Reducers/Naming';

const DetailedProduct = () => {
    const {toProductTable} = getNavigation(useHistory());

    const {id} = useParams(); 
    let products = useSelector(state => state[ProductReducer]);
    if(!products)
        return <div>Подождите, данные загружаются...</div>
        
    let productCard = products.find(product => product.id === parseInt(id));
    const {name, quantity, price, description, priceHistory} = productCard;
    const historyToRender = priceHistory.map(priceStamp => (
        <li>
            <span>Цена составляла {priceStamp.price} на момент {priceStamp.date}</span>
        </li>
    ));

    return (
        <div>
            <div className="productInfo">
                <p>Товар: {name}</p>
                <p>Осталось на складе: {quantity}</p>
                <p>Стоимость (р.): {price}</p>
                <p>Особенности: {description}</p>
            </div>
            <div className="productPrice">
                <p>История цены:</p>
                <ul className="priceHistory">
                    {historyToRender}
                </ul>
            </div>
            <button onClick={toProductTable}>Вернуться</button>
        </div>
    );
}

export default DetailedProduct;