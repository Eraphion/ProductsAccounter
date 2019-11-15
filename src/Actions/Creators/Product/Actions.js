import {DELETE_PRODUCT, EDIT_PRODUCT} from 'Actions/Types' // Could not find a declaration (hint on hover) but it works and it should work...

export const DeleteProduct = id => dispatch => {
    dispatch({
        type: DELETE_PRODUCT,
        payload: id
    })}

export const EditProduct = product => dispatch => {
    dispatch({
        type: EDIT_PRODUCT,
        payload: {
            ...product
        }
    })}