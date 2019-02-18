// @flow
import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import * as Sentry from '@sentry/browser';
import Button from '@material-ui/core/Button';

type Props = {};
type State = {};

export default class CreateInvoice extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {
      values: {
        submissionDate: '',
        dueDate: '',
        total: 0,
        recipientName: 'some name',
        project: '',
        vat: 0,
        id: '1',
        recipientAddress: '',
        recipientEmail: '',
        items: [
          {
            unitPrice: 500,
            description: '',
            quantity: 15,
            totalPrice: 7500,
          },
        ],
        reference: '',
        paid: false,
      },
    };
  }

  // componentDidMount(): void {}

  // shouldComponentUpdate(nextProps: Props, nextState: State): boolean {
  //   return true;
  // };


  handleChange = name => (event) => {
    console.log(name, event);
    // setValues({ ...values, [name]: event.target.value });
  };

  componentDidCatch(error, errorInfo) {
    this.setState({ error });
    Sentry.withScope((scope) => {
      Object.keys(errorInfo).forEach((key) => {
        scope.setExtra(key, errorInfo[key]);
      });
      Sentry.captureException(error);
    });
  }

  render(): React.Element<'div'> {
    // const { } = this.props;
    const { values } = this.state;

    return (
      <div className={`CreateInvoice`}>
        <h1>Create Invoice</h1>
        <div className="form">
          <TextField
            id='standard-multiline-flexible'
            label='Recipient'
            value={values.recipientName}
            onChange={this.handleChange('Recipient')}
            className={''}
            margin='normal' />
          <TextField
            id='standard-multiline-flexible'
            label='Recipient address'
            multiline
            rowsMax='2'
            value={values.recipientAddress}
            onChange={this.handleChange('Recipient address')}
            className={''}
            margin='normal' />
          <TextField
            id='standard-multiline-flexible'
            label='Recipient email'
            value={values.recipientEmail}
            onChange={this.handleChange()}
            className={''}
            margin='normal' />
          <TextField
            id='standard-multiline-flexible'
            label='Recipient email'
            value={values.recipientEmail}
            onChange={this.handleChange()}
            className={''}
            margin='normal' />
          <TextField
            id='standard-multiline-flexible'
            label='Project'
            value={values.project}
            onChange={this.handleChange()}
            className={''}
            margin='normal' />
          <TextField
            id='standard-multiline-flexible'
            label='Reference'
            value={values.reference}
            onChange={this.handleChange()}
            className={''}
            margin='normal' />
        </div>
      </div>
    );
  }
}
