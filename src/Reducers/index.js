import {combineReducers} from 'redux';
import productReducer from './Product/Reducer';

export default combineReducers({
    product: productReducer
});