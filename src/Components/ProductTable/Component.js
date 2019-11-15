import React from 'react';
import {useHistory} from 'react-router-dom';

import {CardList} from 'Components';
import {getNavigation} from 'Routing';

const ProductTable = () => {
const {toAddProduct} = getNavigation(useHistory());
    return (
        <div>
            <CardList />
            <button onClick={toAddProduct}>Добавить товар</button>
        </div>
    );
}

export default ProductTable;