export const formatTransactionTypeToPersian = (type) => {
  switch (type) {
    case 'payments':
      return 'شارژ حساب';
    case 'trip_financials':
      return 'هزینه سفر';
    case 'misc_expenses':
      return 'هزینه متفرقه';
    case 'concurrency_costs':
      return 'هزینه خرید ظرفیت';
    default:
      return 'تمام تراکنش ها';
  }
}

