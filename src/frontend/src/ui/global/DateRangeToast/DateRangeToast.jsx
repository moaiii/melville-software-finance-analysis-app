// @flow
import * as React from 'react';
import DateRangePicker from '../../components/DateRangePicker';

type Props = {};
type State = {};

export default class DateRangeToast extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {
      isOpen: false,
    };
  }

  componentDidMount(): void {}

  shouldComponentUpdate(nextProps: Props, nextState: State): boolean {
    return true;
  }

  handleDateRangeChange = (x) => {
    this.props.setDateRange(x);
  }

  handleOpenToast = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    }, () => {
      if (this.state.isOpen) {
        this.props.closeDateRangeToast();
      } else {
        this.props.openDateRangeToast();
      }
    });
  }

  render(): React.Element<"div"> {
    const { dateRange, isOpen } = this.props;
    // const { } = this.state;

    const openClassModifier = isOpen ? '--isOpen' : '';

    return (
      <div className={`DateRangeToast ${openClassModifier}`}>
        <div
          className={'DateRangeToast__tab'}
          onClick={() => this.handleOpenToast()}>
          OPEN
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
