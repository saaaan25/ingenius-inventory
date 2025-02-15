import {purchasesData} from '@/utils';
import React, { createContext, useEffect, useState } from 'react';

export const PurchasesContext = createContext();

export const PurchasesProvider = ({ children }) => {
  const [purchases, setPurchases] = useState(purchasesData);

  useEffect(() => {
    const fetchPurchases = async () => {
      //fetch purchases api and setPurchases
    };
    fetchPurchases();
  }, []);

  return (
    <PurchasesContext.Provider value={{ purchases, setPurchases }}>
      {children}
    </PurchasesContext.Provider>
  );
};
