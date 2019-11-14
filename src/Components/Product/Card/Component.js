import React from 'react'

const Card = ({name, quantity, price}) => (
     <li>
         <div className="productInfo">
            <p>Название товара: {name}</p>
            <p>Количество на складе: {quantity}</p>
            <p>Цена (р.): {price}</p>
         </div>
         <div className="buttons">
             <button>Редактировать товар</button>
             <button>Удалить товар</button>
         </div>
    </li>
)

export default Card;