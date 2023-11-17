/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
// ZipCodeContext.js
import { createContext, useContext, useReducer, useCallback } from 'react';

const ZipCodeContext = createContext();

const initialState = {
  zipCode: '',
  data: null,
  error: null,
}; 

const zipCodeReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ZIP_CODE':
      return { ...state, zipCode: action.payload };
    case 'SET_DATA':
      return { ...state, data: action.payload, error: null };
    case 'SET_ERROR':
      return { ...state, error: action.payload, data: null };
    default:
      return state;
  }
};

const ZipCodeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(zipCodeReducer, initialState);

  const setZipCode = useCallback((zipCode) => {
    dispatch({ type: 'SET_ZIP_CODE', payload: zipCode });
  }, []);

  const setData = useCallback((data) => {
    dispatch({ type: 'SET_DATA', payload: data });
  }, []);

  const setError = useCallback((error) => {
    dispatch({ type: 'SET_ERROR', payload: error });
  }, []);

  return (
    <ZipCodeContext.Provider
      value={{
        zipCode: state.zipCode,
        data: state.data,
        error: state.error,
        setZipCode,
        setData,
        setError,
      }}
    >
      {children}
    </ZipCodeContext.Provider>
  );
};

const useZipCode = () => {
  const context = useContext(ZipCodeContext);
  if (!context) {
    throw new Error('useZipCode must be used within a ZipCodeProvider');
  }
  return context;
};

export { ZipCodeProvider, useZipCode };