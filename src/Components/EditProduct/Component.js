import React from 'react';
import {useHistory, useParams} from 'react-router-dom';

import {getNavigation} from 'Routing';

const EditProduct = () => {
    const {toProductTable} = getNavigation(useHistory());
    const editNameId = "EditProductName";
    const {id} = useParams();
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