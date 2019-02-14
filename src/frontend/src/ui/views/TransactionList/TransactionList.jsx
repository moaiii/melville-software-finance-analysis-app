// @flow
import * as React from "react";

import CheckIcon from '@material-ui/icons/Check';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fab from '@material-ui/core/Fab';
import SaveIcon from '@material-ui/icons/Save';
import Transaction from './Transaction/Transaction.jsx';

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

  handleTransaction = (i) => {
    this.setState({ expanded: i });
  }

  handleCategoryChange = (i, id) => {
    // this.setState({ expanded: i });
  }

  handleSave = () => {
    this.props.saveTransaction();
    this.setState({loading: true}, () => {
      setTimeout(() => {
        this.setState({ success: true, loading: false })
      }, 2000);
    })
  }

  render(): React.Element<"div"> {
    
    const { transactions, categories } = this.props;
    const { expanded, loading, success } = this.state;

    const _transactions = transactions
      .map((transactionData, index) => {
        return (
          <Transaction 
            categories={categories}
            transactionData={transactionData}
            handleTransactionSelect={this.handleTransaction}
            handleCategoryChange={this.handleCategoryChange}
            expanded={true}
            index={index} />
        );
      });

    return (
      <div className={`TransactionList`}>
        <h1 onClick={() => this.props.history.push('/calendar')} >
          Calendar
        </h1>
        {_transactions}
        <div>
          <Fab color="primary" onClick={() => this.handleSave()}>
            {success ? <CheckIcon /> : <SaveIcon />}
          </Fab>
          {loading && <CircularProgress size={68} />}
        </div>
      </div>
    );
  }
}
