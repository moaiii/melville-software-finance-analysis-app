// @flow
import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import AnalyticsMenu from './subcomponents/menu';

// graph components
import {
  Bar, Calendar, Waffle, Line, Pie,
} from '../../components/Graphs';


export default class Analytics extends React.Component {
  constructor() {
    super();
    this.state = {
      basicSalaryCap: 8424,
      graphConfig: {
        type: '',
        range: '',
        context: '',
        meta: {},
      },
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

  getGraph = (config) => {
    const { type } = config;
    const {graphData, graphKeys, graphMeta} = this.props;

    const props = {
      data: graphData,
      keys: graphKeys,
      meta: graphMeta,
    };

    switch (type) {
      case 'line': {
        return (
          <Line {...props} />
        );
      }
      case 'pie': {
        return (
          <Pie {...props} />
        );
      }
      case 'waffle': {
        return (
          <Waffle {...props} />
        );
      }
      case 'bar': {
        return (
          <Bar {...props} />
        );
      }
      case 'calendar': {
        return (
          <Calendar {...props} />
        );
      }
      default: {
        return null;
      }
    }
  }

  render() {
    const { basicSalaryCap, graphConfig } = this.state;

    return (
      <div className="Analytics">
        <h1>Analytics</h1>
        <AnalyticsMenu />
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
          { this.getGraph(graphConfig) }
        </div>
      </div>
    );
  }
}


/**
 * what was in graph__container
 *
 * <Bar data={graphData} keys={graphKeys} />
    <Line
      data={graphData}
      labels={{
        x: 'Income',
        y: 'Tax',
      }}
    />
 */
