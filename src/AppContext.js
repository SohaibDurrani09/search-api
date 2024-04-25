import React, { createContext, useReducer } from 'react';
import { appReducer } from './AppReducer';

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(appReducer, { query: '', page: 0, stories: [] });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
