// @flow
import * as React from 'react';
import * as Sentry from '@sentry/browser';
import Button from '@material-ui/core/Button';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';

type Props = {};
type State = {};

export default class Invoices extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {
      error: null,
    };
  }

  componentDidMount(): void {
    this.props.getInvoices();
  }

  // shouldComponentUpdate(nextProps: Props, nextState: State): boolean {
  //   return true;
  // }

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

  render(): React.Element<'div'> {
    const { invoices } = this.props;
    // const { } = this.state;

    const invoicesList = invoices.map((invoice) => {
      return (
        <p>{JSON.stringify(invoice)}</p>
      )
    });

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
        {invoicesList}
        <Button onClick={() => this.navigateToCreateInvoice()}>
          <LibraryAddIcon />
          Create invoice
        </Button>
      </div>
    );
  }
}
