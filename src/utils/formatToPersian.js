export const formatTransactionTypeToPersian = (type) => {
  switch (type) {
    case 'payments':
      return 'شارژ حساب';
    case 'trip_financials':
      return 'هزینه سفر';
    case 'misc_expenses':
      return 'هزینه سفر';
    case 'concurrency_costs':
      return 'هزینه خرید ظرفیت';

    default:
      break;
  }
}

