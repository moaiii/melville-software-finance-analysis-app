// @flow
import { connect } from 'react-redux';
import store from '../../../db/store';
import Analytics from './Analytics.jsx';
import {
  setDateRange,
  getFormattedGraphData,
  setBasicSalaryCap,
} from './Analytics.action';

function mapStoreToProps(store) {
  return {
    ...store.AnalyticsReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setBasicSalaryCap: salary => dispatch(setBasicSalaryCap(salary)),
    setDateRange: config => dispatch(setDateRange(config)),
    getFormattedGraphData: config => dispatch(getFormattedGraphData(config)),
  };
}


export default connect(
  mapStoreToProps,
  mapDispatchToProps,
)(Analytics);
