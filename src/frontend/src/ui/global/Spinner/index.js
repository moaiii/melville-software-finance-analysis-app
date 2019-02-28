// @flow
import { connect } from 'react-redux';
import store from '../../../db/store';
import Spinner from './Spinner.jsx';
import * as action from './Spinner.action';

function mapStoreToProps(store) {
  return {
    isOpen: store.SpinnerReducer.isOpen,
    title: store.SpinnerReducer.title,
    subtitle: store.SpinnerReducer.subtitle,
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}


export default connect(
  mapStoreToProps,
  mapDispatchToProps,
)(Spinner);
