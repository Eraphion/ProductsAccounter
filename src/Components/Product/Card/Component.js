import React from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

import {DeleteProduct} from 'Actions/Creators';
import {getNavigation} from 'Routing';
// eslint-disable-next-line no-unused-vars
import _ from './Style.css';

const Product = ({name, quantity, price, id}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {toEditProduct} = getNavigation(history);
    const {toViewProduct} = getNavigation(history);
    const deleteProduct = () => dispatch(DeleteProduct(id));
    
    return (
        <li className="card grey lighten-2">
            <div className="card-content">
                <p>Товар: {name}</p>
                <p>Осталось на складе: {quantity}</p>
                <p>Стоимость (р.): {price}</p>
            </div>
            <div className="card-action rightButtons">
                <button className="btn small mgright-20" onClick={() => toViewProduct(id)}>Подробнее</button>
                <button className="btn small mgright-20" onClick={() => toEditProduct(id)}>Редактировать товар</button>
                <button className="btn small red" onClick={deleteProduct}>Удалить товар</button>
            </div>
        </li>
    );
}

export default Product;