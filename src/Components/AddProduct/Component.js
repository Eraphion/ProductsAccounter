import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import Select from 'react-select';

import {getNavigation} from 'Routing';
import {ProductReducer} from 'Reducers/Naming';
import {InputPositiveOnly} from "Utils/InputChecker";
import {AddQuantity} from 'Actions/Creators';
// eslint-disable-next-line no-unused-vars
import _ from './Style.css';

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
        <div className="card mxwidth-1200 centered">
            <p className="textCentered highlight">Добавление товара на склад</p>
            <form onSubmit={submitForm}>
                <div className="card-content">
                    <div>
                        <p>Начните вводить название</p>
                        <Select options={productOptions} onChange={selected => setSelectedOption(selected)} />
                    </div>

                    <div>
                        <label htmlFor={productQuantityId}>Количество</label>
                        <input id={productQuantityId} value={productQuantity} onChange={e => InputPositiveOnly(e, setProductQuantity)}></input>
                    </div>
                </div>
                <div className="card-action rightButtons">
                    <button className="btn mgright-20" type="submit">Сохранить</button>
                    <button className="btn grey" onClick={toProductTable}>Отменить</button>
                </div>
            </form>
        </div>
     );
}

export default AddProduct;