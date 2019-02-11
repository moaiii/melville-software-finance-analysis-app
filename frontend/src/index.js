import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "./db/store";
import router from "./router";
import "./stylesheet/main.css";

ReactDOM.render(<Provider store={store}>{router}</Provider>,
  document.getElementById("root"));
