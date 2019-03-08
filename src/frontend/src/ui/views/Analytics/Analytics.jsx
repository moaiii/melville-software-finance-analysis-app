// @flow
import * as React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import TextField from '@material-ui/core/TextField';
import DateRangePicker from '../../components/DateRangePicker';
import AnalyticsMenu from './subcomponents/menu';

// components
import Bar from './graphs/Bar/Bar';
// import Line from './graphs/Line/Line';

export default class Analytics extends React.Component {
  constructor() {
    super();
    this.state = {
      basicSalaryCap: 8424,
    };
  }

  componentDidMount() {
    // this.props.getFormattedGraphData({
    //   type: 'line',
    //   range: 'year',
    //   context: 'tax',
    //   meta: {
    //     incomeAmount: 20000,
    //   },
    // });
    this.props.getFormattedGraphData({
      type: 'bar',
      range: 'month',
      context: 'in-out',
    });
  }

  handleDateRangeChange = (config) => {
    this.props.setDateRange(config);
  }

  handleSetBasicSalaryCap = (value) => {
    this.setState({
      basicSalaryCap: value,
    }, () => {
      this.props.getFormattedGraphData({
        type: 'line',
        range: 'year',
        context: 'tax',
        meta: {
          incomeAmount: 50000,
          salaryCap: this.state.basicSalaryCap,
        },
      });
    });
  }

  render() {
    const {
      dateRange, graphData, graphKeys,
    } = this.props;

    const { basicSalaryCap } = this.state;

    return (
      <div className="Analytics">
        <h1>Analytics</h1>
        <AnalyticsMenu />
        <div className="Analytics__date-range">
          <DateRangePicker
            dateFromCallback={this.handleDateRangeChange}
            dateToCallback={this.handleDateRangeChange}
            dateRange={dateRange}
          />
        </div>
        <div className={'Analytics__basic-salary-cap'}>
          <TextField
            id="standard-number"
            label="Basic salary cap"
            value={basicSalaryCap}
            onChange={e => this.handleSetBasicSalaryCap(e.target.value)}
            type="number"
            className={'salary-picker'}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
        />
        </div>
        <div className="Graph__container">
          <Bar data={graphData} keys={graphKeys} />
          {/* <Line
            data={graphData}
            labels={{
              x: 'Income',
              y: 'Tax',
            }}
          /> */}
        </div>
      </div>
    );
  }
}
