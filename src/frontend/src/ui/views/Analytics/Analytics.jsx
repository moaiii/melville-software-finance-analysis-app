// @flow
import * as React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import DateRangePicker from '../../components/DateRangePicker';

// components
import Bar from './graphs/Bar/Bar';

type Props = {};
type State = {};

export default class Analytics extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount(): void {
    this.props.getFormattedGraphData({
      type: 'bar',
      range: 'month',
      context: 'in-out',
    });
  }

  handleDateRangeChange = (config) => {
    this.props.setDateRange(config);
  }

  render(): React.Element<"div"> {
    const { dateRange, graphData, graphKeys } = this.props;
    // const { } = this.state;

    return (
      <div className="Analytics">
        <h1>Analytics</h1>
        <div className="Analytics__date-range">
          <DateRangePicker
            dateFromCallback={this.handleDateRangeChange}
            dateToCallback={this.handleDateRangeChange}
            dateRange={dateRange}
          />
        </div>
        <div className="Graph__container">
          <Bar data={graphData} keys={graphKeys} />
        </div>
      </div>
    );
  }
}
