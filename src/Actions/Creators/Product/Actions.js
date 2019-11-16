import {DELETE_PRODUCT, EDIT_PRODUCT, ADD_QUANTITY} from 'Actions/Types' 

export const DeleteProduct = id => dispatch => {
    dispatch({
        type: DELETE_PRODUCT,
        payload: id
    })
}

export const EditProduct = product => dispatch => {
    dispatch({
        type: EDIT_PRODUCT,
        payload: {
            ...product
        }
    })
}

export const AddQuantity = ({id, addedQuantity}) => dispatch => {
    dispatch({
        type: ADD_QUANTITY,
        payload: {
            id, addedQuantity
         }
     })
}
