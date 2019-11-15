import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import rootReducer from 'Reducers';
import {ProductTable, AddProduct} from 'Components';
import {URLs} from 'Routing';


const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path={URLs.PRODUCT_TABLE} component={ProductTable} exact/>
                <Route path={URLs.ADD_PRODUCT} component={AddProduct} />
            </Switch>
        </BrowserRouter>
    </Provider>
)

export default App;