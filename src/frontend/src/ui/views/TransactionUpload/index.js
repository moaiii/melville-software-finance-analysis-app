import TransactionUpload from './TransactionUpload';
// @flow
import { connect } from 'react-redux';
import store from '../../../db/store';
import { uploadCSV } from './TransactionUpload.action';

function mapStoreToProps(store) {
  return {
    // uploadStatus: store.TransactionUploadReducer.uploadStatus
  };
}

function mapDispatchToProps(/* dispatch */) {
  return {
    uploadCSV: (csvFiles) => dispatchEvent(uploadCSV.submit(csvFiles))
  };
}

export default connect(
  mapStoreToProps,
  mapDispatchToProps,
)(TransactionUpload);
