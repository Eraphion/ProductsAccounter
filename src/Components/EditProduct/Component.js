import React from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {getNavigation} from 'Routing';

const EditProduct = () => {
    const {toProductTable} = getNavigation(useHistory());
    const editNameId = "EditProductName";
    const {id} = useParams();
    const productCard = useSelector(state => state.products).filter(product => product.id === id);
    console.log(productCard);
    return (
        <div>
            <p>Меню редактирования товара</p>
            <p>ID product: {id}</p>
            <form>
                <label htmlFor={editNameId}></label>
                <input id={editNameId}></input>
                <button type="submit">Подтвердить</button>
                <button onClick={toProductTable}>Отменить</button>
            </form>
        </div>
    )
}
   

export default EditProduct;