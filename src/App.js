import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux'

import rootReducer from './Reducers';
import {CardList} from './Components';


const store = createStore(rootReducer)

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