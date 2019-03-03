// @flow
import * as React from 'react';
import * as Sentry from '@sentry/browser';
import Button from '@material-ui/core/Button';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import InvoiceList from './subcomponents/InvoiceItem/InvoiceItem';

type Props = {};
type State = {};

export default class Invoices extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      error: null,
      selected: -1,
    };
  }

  componentDidMount(): void {
    this.props.getInvoices();
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error });
    Sentry.withScope((scope) => {
      Object.keys(errorInfo).forEach((key) => {
        scope.setExtra(key, errorInfo[key]);
      });
      Sentry.captureException(error);
    });
  }

  navigateToCreateInvoice = () => {
    this.props.history.push('/create-invoice');
  }

  handleInvoiceSelect = (index) => {
    this.setState({
      selected: index
    });
  }

  render(): React.Element<'div'> {
    const { invoices } = this.props;
    const { selected } = this.state;

    if (this.state.error) {
      return (
        <button
          type="submit"
          onClick={() => Sentry.showReportDialog()}>
            Report feedback
        </button>
      );
    }

    return (
      <div className={`Invoices`}>
        <h1>Invoices</h1>
        <div className="Invoice__header">
          <Button
            onClick={() => this.navigateToCreateInvoice()} >
            <LibraryAddIcon />
            Create invoice
          </Button>
        </div>
        <div className="Invoice_list">
          <InvoiceList
            handleInvoiceSelect={this.handleInvoiceSelect}
            invoices={invoices}
            selected={selected} />
        </div>
      </div>
    );
  }
}
