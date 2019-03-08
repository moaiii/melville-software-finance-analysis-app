// @flow
import * as React from 'react';
import DateRangePicker from '../../components/DateRangePicker';
import CloseIcon from '@material-ui/icons/Close';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

// type Props = {};
// type State = {};

export default class DateRangeToast extends React.Component/* <Props, State> */ {
  constructor() {
    super();

    this.state = {};
  }

  handleDateRangeChange = (x) => {
    this.props.setDateRange(x);
  }

  handleOpenToast = () => {
    this.props.openDateRangeToast();
  }

  render(): React.Element<"div"> {
    const { dateRange, isOpen } = this.props;

    const openClassModifier = isOpen ? '--isOpen' : '';

    const tabIcon = isOpen
      ? <CloseIcon />
      : <CalendarTodayIcon />;

    return (
      <div className={`DateRangeToast ${openClassModifier}`}>
        <div
          className={'DateRangeToast__tab'}
          onClick={() => this.handleOpenToast()}>
          {tabIcon}
        </div>
        <div className="DateRangeToast__date-picker">
          <DateRangePicker
            dateFromCallback={this.handleDateRangeChange}
            dateToCallback={this.handleDateRangeChange}
            dateRange={dateRange}
          />
        </div>
      </div>
    );
  }
}
