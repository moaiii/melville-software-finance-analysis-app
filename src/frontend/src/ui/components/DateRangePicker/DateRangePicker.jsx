import * as React from 'react';
import TextField from '@material-ui/core/TextField';


export default class DateRangePicker extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const {
      dateFromCallback,
      dateToCallback,
      dateRange,
    } = this.props;

    return (
      <div className="DateRangePicker">
        <form className={'date-range-form'} noValidate>
          <TextField
            id="transaction-list-date-from"
            label="Date from"
            type="date"
            defaultValue={dateRange[0]}
            onChange={dateFromCallback}
            className={'date-from'}
            InputLabelProps={{
              shrink: true,
            }} />
          <TextField
            id="transaction-list-date-to"
            label="Date to"
            type="date"
            onChange={dateToCallback}
            defaultValue={dateRange[1]}
            className={'date-to'}
            InputLabelProps={{
              shrink: true,
            }} />
        </form>
      </div>
    );
  }
}
