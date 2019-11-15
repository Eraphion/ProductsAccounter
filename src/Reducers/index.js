import {combineReducers} from 'redux';
import productReducer from './Product/Reducer';

export default combineReducers({
    products: productReducer
});