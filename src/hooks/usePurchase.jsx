import { useContext } from 'react';
import { PurchaseContext } from '@/providers/PurchaseProvider';
import { groupPurchasesByDate } from '@/utils';

export const usePurchase = () => {
  const { purchases, setPurchases } = useContext(PurchaseContext);
  const purchasesGroupedByDate = groupPurchasesByDate(purchases);
  return { purchases, setPurchases, purchasesGroupedByDate };
};


