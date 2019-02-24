// @flow
import { connect } from 'react-redux';
import store from '../../../db/store';
import Profile from './Profile.jsx';
import {
  setFieldContent,
  getProfileContent,
  setProfileContent,
  addField,
  removeField,
} from './Profile.action';

function mapStoreToProps(store) {
  return {
    fields: store.ProfileReducer.fields,
    network: store.ProfileReducer.network,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setFieldContent: config => store.dispatch(setFieldContent(config)),
    getProfileContent: config => store.dispatch(getProfileContent.submit(config)),
    setProfileContent: config => store.dispatch(setProfileContent(config)),
    addField: config => store.dispatch(addField(config)),
    removeField: config => store.dispatch(removeField(config)),
  };
}

export default connect(
  mapStoreToProps,
  mapDispatchToProps,
)(Profile);
