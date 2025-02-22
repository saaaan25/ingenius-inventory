import { useContext } from 'react';
import { PurchasesContext } from '@/providers/PurchasesProvider';

export const usePurchases = () => {
  const { purchases, createPurchase } = useContext(PurchasesContext);
  return { purchases, createPurchase};
};


