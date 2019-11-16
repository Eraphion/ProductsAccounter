import React from 'react';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';

import {ProductList} from 'Components';
import {getNavigation} from 'Routing';
// eslint-disable-next-line no-unused-vars
import _ from './Style.css';

const ProductTable = () => {
const {toAddProduct} = getNavigation(useHistory());
const [isFiltered, setFiltered] = useState(false);
const [filterName, setFilterName] = useState("");

const filterOptions = {isFiltered, filterName};

    return (
        <div>
            <div className="container">
                <div className="filterField">
                    <span className="filterAlert">Фильтр по имени</span>
                    <input 
                        placeholder="Название товара"
                        value={filterName}
                        onChange={(e) => setFilterName(e.target.value)}
                    ></input>
                </div>
                <label><input type="checkbox" value={isFiltered} onClick={() => setFiltered(!isFiltered)}></input><span>Применить</span></label>
            </div>
            <ProductList {...filterOptions}/>
            <button onClick={toAddProduct}>Добавить товар</button>
        </div>
    );
}

export default ProductTable;