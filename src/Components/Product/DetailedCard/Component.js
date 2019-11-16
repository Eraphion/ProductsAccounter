import React from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {getNavigation} from 'Routing';
import {ProductReducer} from 'Reducers/Naming';
// eslint-disable-next-line no-unused-vars
import _ from './Style.css';

const DetailedProduct = () => {
    const {toProductTable} = getNavigation(useHistory());

    const {id} = useParams(); 
    let products = useSelector(state => state[ProductReducer]);
    if(!products)
        return <div>Подождите, данные загружаются...</div>
        
    let productCard = products.find(product => product.id === parseInt(id));
    const {name, quantity, price, description, priceHistory} = productCard;
    const historyToRender = priceHistory.map(priceStamp => (
        <li key={priceStamp.date}>
            <span>Цена составляла {priceStamp.price} на момент {priceStamp.date}</span>
        </li>
    ));

    return (
        <div className="card grey lighten-2 mxwidth-1200 centered">
            <div className="card-content flexColumns">
                <div className="productDescription">
                    <p>Товар: {name}</p>
                    <p>Осталось на складе: {quantity}</p>
                    <p>Стоимость (р.): {price}</p>
                    <p>Особенности: {description}</p>
                </div>

                <div className="productPrice">
                    <p className="highlight">История цены:</p>
                    <ul className="priceHistory">
                        {historyToRender}
                    </ul>
                </div>
            </div>
            <div className="card-action rightButtons">
                <button className="btn" onClick={toProductTable}>Вернуться</button>
            </div>
        </div>
    );
}

export default DetailedProduct;