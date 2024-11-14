import React, { createContext, useContext, useState } from 'react';

// Create Context
const DataContext = createContext();

// Custom hook to use the context
export function useData() {
  return useContext(DataContext);
}

// DataProvider component to provide context values
export function DataProvider({ children }) {
  const [data, setData] = useState({
    skinColor: '',
    hairColor: '',
    eyeColor: '',
    preferences: {}, // Optional: You can structure this more specifically if needed
  });

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}
