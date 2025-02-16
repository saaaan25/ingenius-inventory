import { useContext } from 'react';
import { PurchasesContext } from '@/providers/PurchasesProvider';
import { groupPurchasesByDate } from '@/utils';

export const usePurchases = () => {
  const { purchases, setPurchases } = useContext(PurchasesContext);
  const purchasesGroupedByDate = groupPurchasesByDate(purchases);
  return { purchases, setPurchases, purchasesGroupedByDate };
};


