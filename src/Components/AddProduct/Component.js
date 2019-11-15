import React from 'react';
import {useHistory} from 'react-router-dom';

import {getNavigation} from 'Routing';

const AddProduct = () => {
    const productNameId = "ProductName";
    const productQuantityId = "ProductQuantity";
    const {toProductTable} = getNavigation(useHistory());

    return (
        <div>
            <p>Добавление нового товара</p>
            <form>
                <div>
                    <label htmlFor={productNameId}>Название товара</label>
                    <input id={productNameId}></input>
                </div>
                <div>
                    <label htmlFor={productQuantityId}>Количество</label>
                    <input id={productQuantityId}></input>
                </div>
                <button type="submit">Сохранить</button>
                <button onClick={toProductTable}>Отменить</button>
            </form>
        </div>
     );
}

export default AddProduct;