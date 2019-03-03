// @flow
import * as React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fab from '@material-ui/core/Fab';
import SaveIcon from '@material-ui/icons/Save';
import TransactionListFilters from './Filters/TransactionListFilters.jsx';
import TransactionItem from './Transaction/TransactionItem.jsx';

type Props = {};
type State = {};

export default class TransactionList extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {
      expanded: -1,
      loading: false,
      success: false,
    };
  }

  componentDidMount(): void {
    this.props.getTransactions();
  }

  shouldComponentUpdate(nextProps) {
    return !!nextProps.transactions;
  }

  handleTransactionSelect = (i) => {
    this.setState({
      expanded: this.state.expanded === i
        ? -1
        : i,
    });
  }

  handleSave = () => {
  }

  handlePersonChange = () => {

  }

  updateTransaction = (params) => {
    this.props.updateTransaction(params);
  }

  render(): React.Element<"div"> {
    const {
      transactions,
      categories,
      filters,
      setFilters,
    } = this.props;

    const {
      expanded,
      loading,
      success,
    } = this.state;

    const allTransactions = transactions
      .map((transaction, index) => {
        return (
          <TransactionItem
            key={`${index}-transaction-item`}
            index={index}
            transaction={transaction}
            expanded={expanded === index}
            categories={categories}
            handlePersonChange={this.handlePersonChange}
            handleTransactionSelect={this.handleTransactionSelect}
            updateTransaction={this.updateTransaction} />
        );
      });

    return (
      <div className={'TransactionList'}>
        <h1>Transactions</h1>
        <TransactionListFilters
          filterState={filters}
          setFilters={setFilters} />
        <div className="TransactionList__transactions">
          {allTransactions}
        </div>
        <div className={'TransactionList__save-button'}>
          <Fab color="primary" onClick={() => this.handleSave()}>
            {success ? <CheckIcon /> : <SaveIcon />}
          </Fab>
          {loading && <CircularProgress size={68} />}
        </div>
      </div>
    );
  }
}
