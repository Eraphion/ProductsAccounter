import React from 'react';
import {useSelector} from 'react-redux';

import {Product} from 'Components';

const CardList = ({isFiltered, filterName}) => {
    const productsSource = useSelector(state => state.products)
    if (!productsSource)
        return <div>Подождите, данные загружаются...</div>
        
    const cardsToRender = productsSource.map(card => {
        if (isFiltered === true && 
            !card.name.toLowerCase().includes(filterName.toLowerCase()))
            return null;
        else 
            return <Product key={card.id} {...card}/>
    })

    return (
        <ul className="container">
            {cardsToRender}
        </ul>)
}

export default CardList;