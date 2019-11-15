import React from 'react';
import {useSelector} from 'react-redux';

import {Card} from 'Components';

const CardList = () => {
    const cardsSrc = useSelector(state => state.product)
    const cardsToRender = cardsSrc.map(card => (
        <Card key={card.id} {...card}/>
    ))

    return (
        <ul>
            {cardsToRender}
        </ul>)
}

export default CardList;