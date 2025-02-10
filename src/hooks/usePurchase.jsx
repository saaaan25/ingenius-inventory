import { useContext } from 'react';
import { PurchaseContext } from '@/providers/PurchaseProvider';

export const usePurchase = () => {
  const { purchases, setPurchases } = useContext(PurchaseContext);
  return { purchases, setPurchases };
};


