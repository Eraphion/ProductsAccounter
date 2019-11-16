//https://medium.com/@jrcreencia/persisting-redux-state-to-local-storage-f81eb0b90e7e

import {ProductReducer} from 'Reducers/Naming';

const inStorageLabel = 'reduxState';

export const loadState = () => {
    try {
      const serializedState = localStorage.getItem(inStorageLabel);
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  }; 

export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(inStorageLabel, serializedState);
    } catch {
      console.log("Failed saving the state to the localStorage");
    }
  };

export const getInitStateIfNoLS = () => ({
    [ProductReducer]: [
        {id: 0, name: "Монитор LG", price: 15000, quantity: 2, description: "IPS монитор с диагональю 17 дюймов"},
        {id: 1, name: "Телефон Huawei", price: 20000, quantity: 1,description: "8 ядерный SoC A-55 с диагональю 5.7 дюймов"},
        {id: 2, name: "Клавиатура Logitech", price: 2000, quantity: 3,description: "Обладает яркой и настраиваемой RGB-подсветкой"},
        {id: 3, name: "Видеокарта MSI", price: 13000, quantity: 4, description: "Дополнительные характеристики видеокарты"},
        {id: 4, name: "Видеокарта ASUS", price: 17000, quantity: 2,description: "Лучше, чем MSI"},
        {id: 6, name: "Принтер Xerox", price: 3000, quantity: 1,description: "Печатает 20 страниц в минуту!"},
        {id: 7, name: "Наушники NONAME", price: 200, quantity: 9,description: "20 - 20000 hz"}
    ]})