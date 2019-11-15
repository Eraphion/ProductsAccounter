import React from 'react';
import {useSelector} from 'react-redux';

import {Card} from 'Components';

const CardList = ({isFiltered, filterName}) => {
    const cardsSrc = useSelector(state => state.products)
    if (!cardsSrc)
        return <div>Подождите, данные загружаются...</div>
        
    const cardsToRender = cardsSrc.map(card => {
        if (isFiltered === true && 
            !card.name.toLowerCase().includes(filterName.toLowerCase()))
            return null;
        else 
            return <Card key={card.id} {...card}/>
    })

    return (
        <ul>
            {cardsToRender}
        </ul>)
}

export default CardList;