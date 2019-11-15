import React from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

import {DeleteProduct} from 'Actions/Creators';
import {getNavigation} from 'Routing'

const Product = ({name, quantity, price, id}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {toEditProduct} = getNavigation(history);
    const {toViewProduct} = getNavigation(history);
    const deleteProduct = () => dispatch(DeleteProduct(id));
    
    return (
        <li>
            <div className="productInfo">
                <p>Товар: {name}</p>
                <p>Осталось на складе: {quantity}</p>
                <p>Стоимость (р.): {price}</p>
            </div>
            <div className="buttons">
                <button onClick={() => toViewProduct(id)}>Подробнее</button>
                <button onClick={() => toEditProduct(id)}>Редактировать товар</button>
                <button onClick={deleteProduct}>Удалить товар</button>
            </div>
        </li>
    );
}

export default Product;