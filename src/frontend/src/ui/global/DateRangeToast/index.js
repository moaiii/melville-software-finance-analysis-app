// @flow
import { connect } from 'react-redux';
import store from '../../../db/store';
import DateRangeToast from './DateRangeToast.jsx';
import {
  openDateRangeToast,
  closeDateRangeToast,
  setDateRange,
} from './DateRangeToast.action';

function mapStoreToProps(store) {
  return {
    ...store.DateRangeToastReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    openDateRangeToast: () => dispatch(openDateRangeToast()),
    closeDateRangeToast: () => dispatch(closeDateRangeToast()),
    setDateRange: config => dispatch(setDateRange(config)),
  };
}


export default connect(
  mapStoreToProps,
  mapDispatchToProps,
)(DateRangeToast);
