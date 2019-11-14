import React from 'react';
import Card from '../Card/Card'

const data = [
    {id: 0, name: "Монитор LG", price: 15000, quantity: 2},
    {id: 1, name: "Телефон Huawei", price: 20000, quantity: 1},
    {id: 2, name: "Клавиатура Logitech", price: 2000, quantity: 3}
]

const CardList = () => {
    const cardsToRender = data.map(card => (
            <Card key={card.id} {...card}/>
    ))

    return (
        <ul>
            {cardsToRender}
        </ul>)
}

export default CardList;