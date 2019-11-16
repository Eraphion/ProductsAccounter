import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import Select from 'react-select';

import {getNavigation} from 'Routing';
import {ProductReducer} from 'Reducers/Naming';
import {InputPositiveOnly} from "Utils/InputChecker";
import {AddQuantity} from 'Actions/Creators';

const AddProduct = () => {
    const productQuantityId = "ProductQuantity";
    const {toProductTable} = getNavigation(useHistory());

    const [productQuantity, setProductQuantity] = useState(1);
    const [selectedOption, setSelectedOption] = useState(undefined);
    const dispatch = useDispatch();

    const products = useSelector(state => state[ProductReducer]);
    let productOptions;

    if (!products)
        productOptions = {};
    else {
        productOptions = products.map(product => ({
            value: product.id,
            label: product.name }
            ));
    }

    const submitForm = e => {
        e.preventDefault();
        if (!selectedOption) return;

        dispatch(AddQuantity({
            id: selectedOption.value,
            addedQuantity: productQuantity
        }))
        
        toProductTable();
    }

    return (
        <div>
            <p>Добавление товара на склад</p>
            <form onSubmit={submitForm}>

                <div>
                    <p>Начните вводить название</p>
                    <Select options={productOptions} onChange={selected => setSelectedOption(selected)} />
                </div>

                <div>
                    <label htmlFor={productQuantityId}>Количество</label>
                    <input id={productQuantityId} value={productQuantity} onChange={e => InputPositiveOnly(e, setProductQuantity)}></input>
                </div>

                <button type="submit">Сохранить</button>
                <button onClick={toProductTable}>Отменить</button>
            </form>
        </div>
     );
}

export default AddProduct;