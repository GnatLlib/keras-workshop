import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Redirect, browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import { createBrowserHistory } from "history";
import configureStore from "./store/configureStore";
import routes from "./routes";
import "./style.scss";
import { fetchProtectedData } from "./actions/data";

require("bootstrap-webpack");

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Redirect from="/" to="main" />
            {routes}
        </Router>
    </Provider>,
    document.getElementById("root")
);
