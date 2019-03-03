import React from 'react';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';


export default ({ invoices, selected, handleInvoiceSelect }) => {
  const invoicesList = invoices.map((invoice, index) => {
    return (
      <ExpansionPanel
        key={`${index}-${invoice.id}-invoice`}
        expanded={selected === index}
        onChange={() => handleInvoiceSelect(index)}>
        <ExpansionPanelSummary
          className="Invoice__panel"
          expandIcon={<ExpandMoreIcon />}>
          <h1>£ {invoice.total}</h1>
          <h2>{invoice.project}</h2>
          <p>{invoice.submissionDate}</p>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={'Invoice__tray'}>
          <div className="lhs">
            <span>
              <h3>Id:</h3>
              <p>{invoice.id}</p>
            </span>
            <span>
              <h3>Project:</h3>
              <p>{invoice.project}</p>
            </span>
            <span>
              <h3>Reference:</h3>
              <p>{invoice.reference}</p>
            </span>
            <span>
              <h3>VAT:</h3>
              <p>£ {invoice.vat}</p>
            </span>
            <span>
              <h3>Submission date:</h3>
              <p>{invoice.submissionDate}</p>
            </span>
            <span>
              <h3>Due date:</h3>
              <p>{invoice.dueDate}</p>
            </span>
          </div>
          <div className="rhs">
            <span>
              <h3>Recipient name:</h3>
              <p>{invoice.recipientName}</p>
            </span>
            <span>
              <h3>Recipient address:</h3>
              <p>{invoice.recipientAddress}</p>
            </span>
            <span>
              <h3>Recipient email:</h3>
              <p>{invoice.recipientEmail}</p>
            </span>
            <span>
              <h3>Billable:</h3>
              {invoice.items.map((item) => {
                return (
                  <p>{item.description} - {item.quantity} @ £{item.unitPrice} = £{item.totalPrice}</p>
                );
              })}
            </span>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  });

  return (
    <div className="InvoiceListItems">
      {invoicesList}
    </div>
  );
};
