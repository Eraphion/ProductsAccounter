import React, {useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import {getNavigation} from 'Routing';
import {EditProduct as EditProductAction} from 'Actions/Creators';
import {InputNotNegative, InputNotEmpty, InputPositiveOnly} from "Utils/InputChecker";
import {ProductReducer} from 'Reducers/Naming';

const EditProduct = () => {
    const editNameId = "EditProductName";
    const editQuantityId = "EditQuantityName";
    const editPriceId = "EditPriceName";
    const editDescriptionId = "EditDescriptionName";
    const {toProductTable} = getNavigation(useHistory());

    const {id} = useParams(); // it is a string
    const productCard = useSelector(state => state[ProductReducer]).find(product => product.id === parseInt(id));

    const {name, quantity, price, description} = productCard;
    const [newName, setNewName] = useState(name)
    const [newQuantity, setNewQuantity] = useState(quantity)
    const [newPrice, setNewPrice] = useState(price)
    const [newDescription, setNewDescription] = useState(description)
    

    const dispatch = useDispatch();
    const editProduct = () => dispatch(EditProductAction({
        ...productCard,
        name: newName,
        quantity: newQuantity,
        price: newPrice,
        description: newDescription
    }))

    const submitForm = (e) => {
        e.preventDefault();
        editProduct();
        toProductTable();
    }

    return (
        <div className="card mxwidth-1200 centered">
            <p className="highlight textCentered">Меню редактирования товара</p>
            <form onSubmit={submitForm}>
                <div className="card-content">
                    <label htmlFor={editNameId}>Название: </label>
                    <input id={editNameId} value={newName} onChange={(e) => InputNotEmpty(e, setNewName)}></input>

                    <label htmlFor={editQuantityId}>На складе: </label>
                    <input id={editQuantityId} value={newQuantity} onChange={(e) => InputNotNegative(e, setNewQuantity)}></input>

                    <label htmlFor={editPriceId}>Цена (р.): </label>
                    <input id={editPriceId} value={newPrice} onChange={(e) => InputPositiveOnly(e, setNewPrice)}></input>

                    <label htmlFor={editDescriptionId}>Описание: </label>
                    <input id={editDescriptionId} value={newDescription} onChange={(e) => setNewDescription(e.target.value)}></input> 
                </div>

                <div className="card-action rightButtons">
                    <button className="btn mgright-20" type="submit">Подтвердить</button>
                    <button className="btn grey" onClick={toProductTable}>Отменить</button>
                </div>
            </form>
        </div>
    )
}
   

export default EditProduct;