import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {BrowserRouter} from "react-router-dom";
import "./index.css";

import reducers from "./reducers";

import App from "./components/App";

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
</Provider>, document.getElementById("root"));
