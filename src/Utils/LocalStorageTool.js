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
        {id: 2, name: "Клавиатура Logitech", price: 2000, quantity: 3,description: "Обладает яркой и настраиваемой RGB-подсветкой"}
    ]})