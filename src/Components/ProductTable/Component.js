import React from 'react';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';

import {CardList} from 'Components';
import {getNavigation} from 'Routing';

const ProductTable = () => {
const {toAddProduct} = getNavigation(useHistory());
const [isFiltered, setFiltered] = useState(false);
const [filterName, setFilterName] = useState("");

const filterOptions = {isFiltered, filterName};

    return (
        <div>
            <div>
                <span>Применить фильтр по имени</span>
                <input 
                    placeholder="Название товара"
                    value={filterName}
                    onChange={(e) => setFilterName(e.target.value)}
                ></input>

                <input type="checkbox" value={isFiltered} onClick={() => setFiltered(!isFiltered)}></input>
            </div>
            <CardList {...filterOptions}/>
            <button onClick={toAddProduct}>Добавить товар</button>
        </div>
    );
}

export default ProductTable;