import {DELETE_PRODUCT, EDIT_PRODUCT, INIT_STORE, DEFAULT} from 'Actions/Types';
import {ProductReducer} from 'Reducers/Naming';
import SharedReducer from 'Utils/SharedReducer';
import { getDate } from 'Utils/DateParser';

const createPriceHistory = price => ({
    price,
    date: getDate()
});

const getHandlers = (state , {payload}) => ({
    [DELETE_PRODUCT]: () => (
        state.filter(product => product.id !== payload)),
    [EDIT_PRODUCT]: () => (
        state.map(product => {
            if(product.id === payload.id) {
                const {name, price, quantity,description, priceHistory} = payload;
                if (price !== priceHistory[priceHistory.length-1].price)
                    priceHistory.push(createPriceHistory(price));
                return ({
                    ...product,
                    name, price, quantity, description
                });
            }
            else 
                return product;
        })
    ),
    [INIT_STORE]: () => payload[ProductReducer].map(product => {
        if (!product.priceHistory)
             product.priceHistory = [createPriceHistory(product.price)];
        return product;
    }),
    [DEFAULT]: () => state
})

export default SharedReducer(getHandlers);