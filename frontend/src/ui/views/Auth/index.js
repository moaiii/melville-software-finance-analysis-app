// @flow

import * as action from "./Auth.action";

import Auth from "./Auth.jsx";
import {connect} from "react-redux";
import store from "../../../db/store";

function mapStoreToProps( store ) {
  return {

  }
}
 
function mapDispatchToProps( dispatch ) {
  return {

  }
}


export default connect( mapStoreToProps, mapDispatchToProps )( Auth );
