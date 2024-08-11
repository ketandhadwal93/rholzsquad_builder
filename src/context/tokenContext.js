import React, { createContext, useContext, useEffect, useState } from 'react';
import apiEndPoint from '../utilis/api';

const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const fetchToken = () => {
    const token = sessionStorage.getItem('token');
    setToken(token);
    apiEndPoint.setToken(token)
    return token;
  };

  useEffect(() => {
    fetchToken();
  }, [token]);

  return (
    <TokenContext.Provider value={{ token }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => {
  return useContext(TokenContext);
};
