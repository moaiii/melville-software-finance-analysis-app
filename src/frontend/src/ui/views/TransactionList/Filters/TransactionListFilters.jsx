import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const TransactionListFilters = ({ filterState, setFilters }) => {
  const {
    receipt,
    category,
    dateRange,
    credits,
    debits,
    valueRange,
  } = filterState;

  return (
    <div className={'TransactionListFilters'}>
      <div className="missing-only">
        <FormControlLabel
          control={
            <Checkbox
              checked={receipt}
              onChange={e => setFilters({
                key: 'receipt',
                value: e.target.checked,
                middlewareMode: 'last',
              })}
              value={receipt}
              classes={{
                root: 'receipts-filter-root',
                checked: 'receipts-filter-checked',
              }}
            />
          }
          label="Missing receipts"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={category}
              onChange={e => setFilters({
                key: 'category',
                value: e.target.checked,
                middlewareMode: 'last',
              })}
              value={category}
              classes={{
                root: 'category-filter-root',
                checked: 'category-filter-checked',
              }}
            />
          }
          label="Missing category"
        />
      </div>
      <div className={'transaction-type'}>
        <FormControlLabel
          control={
            <Checkbox
              checked={credits}
              onChange={e => setFilters({
                key: 'credits',
                value: e.target.checked,
                middlewareMode: 'last',
              })}
              value={credits}
              classes={{
                root: 'credit-filter-root',
                checked: 'credit-filter-checked',
              }}
            />
          }
          label="Credits"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={debits}
              onChange={e => setFilters({
                key: 'debits',
                value: e.target.checked,
                middlewareMode: 'last',
              })}
              value={debits}
              classes={{
                root: 'debit-filter-root',
                checked: 'debit-filter-checked',
              }}
            />
          }
          label="Debits"
        />
      </div>
      <div className="date-range">
        <form className={'date-range-form'} noValidate>
          <TextField
            id="transaction-list-date-from"
            label="Date from"
            type="date"
            defaultValue={dateRange[0]}
            onChange={e => setFilters({
              value: e.target.value,
              key: 'date-from',
              middlewareMode: 'last',
            })}
            className={'date-from'}
            InputLabelProps={{
              shrink: true,
            }} />
          <TextField
            id="transaction-list-date-to"
            label="Date to"
            type="date"
            onChange={e => setFilters({
              value: e.target.value,
              key: 'date-to',
              middlewareMode: 'last',
            })}
            defaultValue={dateRange[1]}
            className={'date-to'}
            InputLabelProps={{
              shrink: true,
            }} />
        </form>
      </div>
    </div>
  );
};

export default TransactionListFilters;
