import React from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';

import {getNavigation} from 'Routing';
import {EditProduct as EditProductAction} from 'Actions/Creators';

const EditProduct = () => {
    const editNameId = "EditProductName";
    const {toProductTable} = getNavigation(useHistory());

    const {id} = useParams(); // it is a string
    const productCard = useSelector(state => state.products).find(product => product.id === parseInt(id));

    const {name, quantity, price, description} = productCard;
    const [newName, setNewName] = useState(name)
    const [newQuantity, setNewQuantity] = useState(quantity)
    const [newPrice, setNewPrice] = useState(price)
    const [newDescription, setNewDescription] = useState(description)
    

    const dispatch = useDispatch();
    const editProduct = () => dispatch(EditProductAction({
        name: newName,
        quantity: newQuantity,
        price: newPrice,
        description: newDescription
    }))

    const submitForm = (e) => {
        e.preventDefault();
        toProductTable();
    }

    return (
        <div>
            <p>Меню редактирования товара</p>
            <form onSubmit={submitForm}>
                <label htmlFor={editNameId}></label>
                <input id={editNameId} value={newName} onChange={(e) => setNewName(e.target.value)}></input>
                <button type="submit">Подтвердить</button>
                <button onClick={toProductTable}>Отменить</button>
            </form>
        </div>
    )
}
   

export default EditProduct;