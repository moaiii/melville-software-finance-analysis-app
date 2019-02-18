// @flow
import {connect} from "react-redux";
import store from "../../../db/store";
import CreateInvoice from "./CreateInvoice.jsx";
import * as action from "./CreateInvoice.action";

function mapStoreToProps( store ) {
  return {

  }
}
 
function mapDispatchToProps( dispatch ) {
  return {

  }
}


export default connect( mapStoreToProps, mapDispatchToProps )( CreateInvoice );
