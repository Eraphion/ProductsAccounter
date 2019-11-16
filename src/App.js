import React, {useEffect} from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import _ from 'lodash';
// eslint-disable-next-line no-unused-vars
import __ from './RootStyles.css';

import rootReducer from 'Reducers';
import {ProductTable, AddProduct, EditProduct, DetailedProduct} from 'Components';
import {URLs} from 'Routing';
import {saveState, loadState, getInitStateIfNoLS} from 'Utils/LocalStorageTool';
import {InitStore} from 'Actions/Creators';
import {ProductReducer} from 'Reducers/Naming';

const getInitState = () => {
    let initState = loadState();
    if(!initState) {
       initState = getInitStateIfNoLS();
    }
    return initState;
}

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(_.throttle(() => {
    saveState({
        [ProductReducer]: store.getState()[ProductReducer]
    }); 
}, 500));


const App = () => {
    useEffect(() => {
        store.dispatch(InitStore(getInitState()));
    }, []);

    return (
         <Provider store={store} classNames="grey">
            <BrowserRouter>
                <Switch>
                     <Route path={URLs.PRODUCT_TABLE} component={ProductTable} exact/>
                     <Route path={URLs.ADD_PRODUCT} component={AddProduct} />
                     <Route path={URLs.EDIT_PRODUCT} component={EditProduct} />
                     <Route path={URLs.VIEW_PRODUCT} component={DetailedProduct} />
                </Switch>
            </BrowserRouter>
         </Provider>
    )};

export default App;