import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from 'Reducers';
import {CardList} from 'Components';


const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => (
    <Provider store={store}>
        <div >
            <h1>
                Hello from app!
            </h1>
            <CardList />
        </div>
    </Provider>
)

export default App;