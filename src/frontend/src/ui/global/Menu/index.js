// @flow
import { connect } from 'react-redux';
import store from '../../../db/store';
import Menu from './Menu.jsx';
import { changeRoute } from './Menu.action';

function mapStoreToProps(store) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: route => dispatch(changeRoute(route)),
  };
}


export default connect(
  mapStoreToProps,
  mapDispatchToProps,
)(Menu);
