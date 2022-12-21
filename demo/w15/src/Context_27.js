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

  useEffect(() => {
    dispatch({type: 'GET_TOTALS'});
  },[state.cart] )
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });  
  }
  const removeButton = () => {
    dispatch({ type: 'CLEAR_BUTTON' });  
  }

  const increase = (id) => {
    dispatch({type: 'INCREASE', payload: id});

  }

  const decrease = (id) => {
    dispatch({type: 'DECREASE', payload: id});

  }

  return <AppContext_27.Provider value={{...state, clearCart, increase,decrease, removeButton}}>
     {children}  
  </AppContext_27.Provider>
};

const useGlobalContext_xx = () => {
  return useContext(AppContext_27);

}

export {AppProvider_27, useGlobalContext_xx} ;
