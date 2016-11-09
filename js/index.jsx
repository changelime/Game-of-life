import { Provider } from "react-redux"
import App from "components/app";
import React from "react";
import ReactDOM from "react-dom";
import store from "store/index.js";
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("#react-root")
);