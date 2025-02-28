import { format } from 'date-fns';

export const orderPurchasesByDate = (purchases) => {
  return purchases.sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const groupPurchasesByDate = (purchases) => {
  const orderedPurchases = orderPurchasesByDate(purchases);

  return orderedPurchases.reduce((acc, purchase) => {
    const datePart = format(new Date(purchase.date), 'yyyy-MM-dd');
    const existingGroup = acc.find(group => group.date === datePart);
    if (existingGroup) {
      existingGroup.purchases.push(purchase);
    } else {
      acc.push({ date: datePart, purchases: [purchase] });
    }
    return acc;
  }, []);
};

export const groupUsersByRole = (users) => {
  return users.reduce((acc, user) => {
    const { role } = user;
    const existingGroup = acc.find(group => group.role === role);
    if (existingGroup) {
      existingGroup.users.push(user);
    } else {
      acc.push({ role, users: [user] });
    }
    return acc;
  }, []);
}
