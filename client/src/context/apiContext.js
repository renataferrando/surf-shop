import React, { createContext, useReducer } from "react";
import { useSearchParams } from "react-router-dom";
import { productsReducer, initialState } from "../reducers/productsReducer";

export const ApiContext = createContext();

const ApiContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <ApiContext.Provider
      value={[state, dispatch, searchParams, setSearchParams]}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContextProvider;
