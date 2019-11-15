import {combineReducers} from 'redux';
import productReducer from './Product/Reducer';
import {ProductReducer} from 'Reducers/Naming';

export default combineReducers({
    [ProductReducer]: productReducer
});