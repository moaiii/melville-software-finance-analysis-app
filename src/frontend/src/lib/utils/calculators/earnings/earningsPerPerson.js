import store from '../../../../db/store';
import people from '../../constants/people.json';

const earningsPerPerson = () => {
  const transactions = store.getState().TransactionListReducer.transactions.display;

  return {};
};

export default {
  earningsPerPerson,
};
