import React from 'react'

const Card = ({name, quantity, price}) => (
     <li>
         <p>Название товара: {name}</p>
         <p>Количество на складе: {quantity}</p>
         <p>Цена (р.): {price}</p>
    </li>
)

export default Card;