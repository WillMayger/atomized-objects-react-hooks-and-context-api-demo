import React, { createContext, useReducer, useContext } from 'react';
import reducers from './reducers';
import { getInitialState, combineReducers } from './helpers';

const initialState = getInitialState(reducers);
const StoreContext = createContext(initialState);

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(combineReducers(reducers), initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const { state, dispatch } = useContext(StoreContext);
  return { state, dispatch };
};
