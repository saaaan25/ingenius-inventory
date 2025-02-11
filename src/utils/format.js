export const orderPurchasesByDate = (purchases) => {
  return purchases.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
};

export const groupPurchasesByDate = (purchases) => {
  const orderedPurchases = orderPurchasesByDate(purchases);

  return orderedPurchases.reduce((acc, purchase) => {
    const { fecha } = purchase;
    const existingGroup = acc.find(group => group.fecha === fecha);
    if (existingGroup) {
      existingGroup.purchases.push(purchase);
    } else {
      acc.push({ fecha, purchases: [purchase] });
    }
    return acc;
  }, []);
};
