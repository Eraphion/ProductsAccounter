import {DELETE_PRODUCT, EDIT_PRODUCT, DEFAULT} from 'Actions/Types'

const getHandlers = (state, {payload}) => ({
    [DELETE_PRODUCT]: () => (
        state.filter(item => item.id !== payload)),
    [EDIT_PRODUCT]: () => (
        state.map(item => {
            if(item.id === payload.id) {
                const {name, price, quantity,description} = payload;
                return ({
                    ...item,
                    name, price, quantity, description
                });
            }
            else 
                return item;
        })
    ),
    [DEFAULT]: () => state
})

const initState = [
    {id: 0, name: "Монитор LG", price: 15000, quantity: 2, description: "IPS монитор с диагональю 17 дюймов"},
    {id: 1, name: "Телефон Huawei", price: 20000, quantity: 1,description: "8 ядерный SoC A-55 с диагональю 5.7 дюймов"},
    {id: 2, name: "Клавиатура Logitech", price: 2000, quantity: 3,description: "Обладает яркой и настраиваемой RGB-подсветкой"}
]

export default (state = initState, action) => {
   const handlers = getHandlers(state,action);
   const handler = handlers[action.type] || handlers[DEFAULT];
   return handler();
}