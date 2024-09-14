import { createContext, useContext, useReducer } from "react";

export const initialState = { data: [], theme: 'light' };

const reducer = (state, action) => {
  if (action.type === 'dentistas') {
    return { ...state, data: action.data };
  }

  if (action.type === 'theme') {
    return { ...state, theme: action.theme };
  }

  return state;
}

export const ContextGlobal = createContext(undefined);

export const useContextGlobal = () => useContext(ContextGlobal);

export const ContextProvider = ({ children }) => (
  <ContextGlobal.Provider
    value={useReducer(reducer, initialState)}
  >
    {children}
  </ContextGlobal.Provider>
);
