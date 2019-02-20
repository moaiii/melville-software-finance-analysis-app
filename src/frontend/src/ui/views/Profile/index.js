// @flow
import { connect } from 'react-redux';
import store from '../../../db/store';
import Profile from './Profile.jsx';
import { setFieldContent } from './Profile.action';

function mapStoreToProps(store) {
  return {
    fields: store.ProfileReducer.fields,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setFieldContent: config => store.dispatch(setFieldContent(config)),
  };
}

export default connect(
  mapStoreToProps,
  mapDispatchToProps,
)(Profile);
