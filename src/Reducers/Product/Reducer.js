import {DELETE_PRODUCT, EDIT_PRODUCT, INIT_STORE, DEFAULT} from 'Actions/Types';
import SharedReducer from 'Utils/SharedReducer';

const getHandlers = (state , {payload}) => ({
    [DELETE_PRODUCT]: () => (
        state.filter(item => item.id !== payload)),
    [EDIT_PRODUCT]: () => (
        state.map(item => {
            if(item.id === payload.id) {
                const {name, price, quantity,description} = payload;
                return ({
                    ...item,
                    name, price, quantity, description
                });
            }
            else 
                return item;
        })
    ),
    [INIT_STORE]: () => payload.products,
    [DEFAULT]: () => state
})

export default SharedReducer(getHandlers);