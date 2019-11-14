import {combineReducers} from 'redux';
import ProductReducer from './Product/Reducer';

export default combineReducers({
    product: ProductReducer
});