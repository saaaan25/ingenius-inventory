import purchasesData from '@/utils/data';
import React, { createContext, useEffect, useState } from 'react';

export const PurchaseContext = createContext();

export const PurchaseProvider = ({ children }) => {
  const [purchases, setPurchases] = useState([purchasesData]);

  useEffect(() => {
    const fetchPurchases = async () => {
      //fetch purchases api and setPurchases
    };
    fetchPurchases();
  }, []);

  return (
    <PurchaseContext.Provider value={{ purchases, setPurchases }}>
      {children}
    </PurchaseContext.Provider>
  );
};
