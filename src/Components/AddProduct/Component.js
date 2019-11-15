import React from 'react';
import {useHistory} from 'react-router-dom';

const AddProduct = () => {
    const productNameId = "ProductName";
    const productQuantityId = "ProductQuantity";
    const history = useHistory();
    
    const moveToHome = () => history.push("/");

    return (
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
            <button onClick={moveToHome}>Отменить</button>
        </form>
     );
}

export default AddProduct;