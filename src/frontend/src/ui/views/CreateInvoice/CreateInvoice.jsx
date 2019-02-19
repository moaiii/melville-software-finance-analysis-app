// @flow
import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import * as Sentry from '@sentry/browser';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import AddIcon from '@material-ui/icons/Add';
import BillableItem from './BillableItem/BillableItem';

type Props = {};
type State = {};

export default class CreateInvoice extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {
      error: null,
    };
  }

  createInvoice = () => {
    this.props.createInvoice();
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

  render() {
    const {
      fields,
      setInvoiceField,
      addBillableItem,
      removeBillableItem,
      setBillableItemField,
    } = this.props;

    const billableItems = fields.items
      .map((item, index) => {
        return (
          <div className={'billable-item'} key={`${index}-billable-item`}>
            <BillableItem
              unitPrice={item.unitPrice}
              description={item.description}
              quantity={item.quantity}
              totalPrice={item.totalPrice}
              index={index}
              removeBillableItem={() => removeBillableItem(index)}
              setBillableItemField={setBillableItemField} />
          </div>
        );
      });

    return (
      <div className={'CreateInvoice'}>
        <h1>Create Invoice</h1>
        <div className="form">
          <TextField
            id="Recipient-invoice-field"
            label="Recipient name"
            type="text"
            value={fields.recipientName}
            onChange={e => setInvoiceField({
              key: 'recipientName',
              value: e.target.value,
            })}
            className={''}
            margin="normal" />
          <TextField
            id="Recipient-address-invoice-field"
            label="Recipient address"
            multiline
            type="text"
            rowsMax="2"
            value={fields.recipientAddress}
            onChange={e => setInvoiceField({
              key: 'recipientAddress',
              value: e.target.value,
            })}
            className={''}
            margin="normal" />
          <TextField
            id="Recipient-email-invoice-field"
            label="Recipient email"
            type="email"
            value={fields.recipientEmail}
            onChange={e => setInvoiceField({
              key: 'recipientEmail',
              value: e.target.value,
            })}
            className={''}
            margin="normal" />
          <TextField
            id="Project-invoice-field"
            label="Project"
            type="text"
            value={fields.project}
            onChange={e => setInvoiceField({
              key: 'project',
              value: e.target.value,
            })}
            className={''}
            margin="normal" />
          <TextField
            id="Reference-invoice-field"
            label="reference"
            type="text"
            value={fields.reference}
            onChange={e => setInvoiceField({
              key: 'reference',
              value: e.target.value,
            })}
            className={''}
            margin="normal" />
          <FormControlLabel
            control={
              <Checkbox
                checked={fields.paid}
                onChange={e => setInvoiceField({
                  key: 'paid',
                  value: e.target.checked,
                })}
                value={fields.paid}
                classes={{
                  root: 'credit-filter-root',
                  checked: 'credit-filter-checked',
                }}
              />
            }
            label="Paid" />
          <FormControlLabel
            control={
              <Checkbox
                checked={fields.addVat}
                onChange={e => setInvoiceField({
                  key: 'addVat',
                  value: e.target.checked,
                  middlewareMode: 'first',
                })}
                value={fields.addVat}
                classes={{
                  root: 'credit-filter-root',
                  checked: 'credit-filter-checked',
                }}
              />
            }
            label="Add Vat" />
          <div className="billiable-item-container">
            <p>Billable items</p>
            { billableItems }
            <Button color="secondary" onClick={() => addBillableItem()}>
              Add billable item
              <AddIcon />
            </Button>
          </div>
          <form className={'date-range-form'} noValidate>
            <TextField
              id="create-invoice-submission-date"
              label="Submission date"
              type="date"
              defaultValue={fields.submissionDate}
              onChange={e => setInvoiceField({
                value: e.target.value,
                key: 'submissionDate',
              })}
              className={'submission-date'}
              InputLabelProps={{
                shrink: true,
              }} />
            <TextField
              id="create-invoice-due-date"
              label="Due date"
              type="date"
              defaultValue={fields.dueDate}
              onChange={e => setInvoiceField({
                value: e.target.value,
                key: 'dueDate',
              })}
              className={'due-date'}
              InputLabelProps={{
                shrink: true,
              }} />
          </form>
          <div className={'totals'}>
            <h1>Total: £{fields.total}</h1>
            <h3>Vat: £{fields.vatAmount}</h3>
          </div>
          <Button
            color="primary"
            className={'create-invoice-button'}
            onClick={() => this.createInvoice()}>
            Create invoice
          </Button>
        </div>
      </div>
    );
  }
}
