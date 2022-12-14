import React, { useState, useContext, useReducer, useEffect, Children } from 'react';
import Reducer_27 from './Reducer_27';

import cartItems from './data';

const AppContext_27 = React.createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  amount: 4,
  total: 123.45
}

const AppProvider_27 = ({children}) => {
  const [state, dispatch] = useReducer(Reducer_27, initialState);
  return <AppContext_27.Provider value={{...state}}>
     {children}  
  </AppContext_27.Provider>
};

const useGlobalContext_xx = () => {
  return useContext(AppContext_27);

}

export {AppProvider_27, useGlobalContext_xx} ;
