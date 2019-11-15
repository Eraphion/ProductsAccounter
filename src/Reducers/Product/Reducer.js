import {DELETE_PRODUCT, DEFAULT} from 'Actions/Types'

const getHandlers = (state, {payload}) => ({
    [DELETE_PRODUCT]: () => (
        state.filter(item => item.id !== payload)),
    [DEFAULT]: () => state
})

const initState = [
    {id: 0, name: "Монитор LG", price: 15000, quantity: 2},
    {id: 1, name: "Телефон Huawei", price: 20000, quantity: 1},
    {id: 2, name: "Клавиатура Logitech", price: 2000, quantity: 3}
]

export default (state = initState, action) => {
   const handlers = getHandlers(state,action);
   const handler = handlers[action.type] || handlers[DEFAULT];
   return handler();
}