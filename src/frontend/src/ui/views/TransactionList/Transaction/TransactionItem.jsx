import React from 'react';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

const TransactionItem = ({
  index,
  transaction,
  expanded,
  categories,
  handleTransactionSelect,
  updateTransaction
}) => {
  const {
    id,
    Reference,
    category = '',
    receipt = '',
  } = transaction;

  const isCredit = !!parseFloat(transaction.in);

  const moneyValue = isCredit
    ? `+ £${transaction.in}`
    : `- £${transaction.out}`;

  const bulletpoint
    = <div className={`transaction-item__bulletpoint --${isCredit ? 'credit' : 'debit'}`} />;

  return (
    <ExpansionPanel
      key={`${id}-transaction`}
      expanded={expanded}
      onChange={() => handleTransactionSelect(index)}>
      <ExpansionPanelSummary
        className={'transaction-item-topline'}
        expandIcon={<ExpandMoreIcon />}>
        {bulletpoint}
        <Typography>{moneyValue}</Typography>
        <Typography>{Reference}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={'TransactionItem__bottom'}>
        <TextField
          value={receipt}
          id={`transaction-${id}-hyperlink`}
          label="Receipt hyperlink"
          placeholder="Receipt hyperlink"
          className={'Transaction__hyperlink'}
          margin="normal"
          onChange={e => updateTransaction({
            key: id,
            value: e.target.value,
            type: 'receipt',
            middlewareMode: 'last',
          })}
          variant="outlined" />
        <FormControl>
          <InputLabel htmlFor={`category-${id}`}>
            Category
          </InputLabel>
          <Select
            value={category}
            onChange={e => updateTransaction({
              key: id,
              value: e.target.value,
              type: 'category',
              middlewareMode: 'last',
            })}
            inputProps={{
              name: 'category',
              id: `category-${id}`,
            }}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {categories.map((cat, i) => {
              return (
                <MenuItem
                  key={`${id}-${i}-menu-item`}
                  value={cat}>
                  {cat}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default TransactionItem;
