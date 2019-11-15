import {INIT_STORE} from 'Actions/Types';

export const InitStore = storeData => dispatch =>  {
    dispatch({
        type: INIT_STORE,
        payload: storeData
    });
} 