import React, { createContext, useReducer, useContext } from "react";


const StoreContext = createContext();
const { Provider } = StoreContext;
const reducer = (state) => {return state}

const StoreProvider = ({ value = [], ...props }) => {
  const defaultState = { }

  const [state, dispatch] = useReducer(reducer, defaultState);

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
