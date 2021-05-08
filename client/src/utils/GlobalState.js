import React, { createContext, useReducer, useContext } from "react";


const StoreContext = createContext();
const { Provider } = StoreContext;

// Reducer to allow us to set our global state
const reducer = (state, action) => {
  switch (action.type) {
  case "SetImages":
    console.log("I'm the payload", action.payload)
    return {
      imageArray: action.payload,
    };

  default:
    return state;
  }
};


const StoreProvider = ({ value = [], ...props }) => {
  const defaultState = { }
  
  const [state, dispatch] = useReducer(reducer, defaultState);

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
