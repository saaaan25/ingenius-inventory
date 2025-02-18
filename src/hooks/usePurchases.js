import { useContext } from 'react';
import { PurchasesContext } from '@/providers/PurchasesProvider';

export const usePurchases = () => {
  const { purchases, createPurchase, updatePurchase } = useContext(PurchasesContext);
  return { purchases, createPurchase, updatePurchase};
};


