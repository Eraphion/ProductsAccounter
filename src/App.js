import React from 'react';
import {createStore} from 'redux';
import rootReducer from './Reducers';
import {CardList} from './Components';


const store = createStore(rootReducer)

const App = () => (
    <div store={store}>
        <h1>
            Hello from app!
        </h1>
        <CardList />
    </div>

)

export default App;