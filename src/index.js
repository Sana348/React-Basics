import React from "react";
import ReactDOM from "react-dom";
import Main from "./Components/Main";
// import App from "./Components/App";
import "./styles/stylesheet.css";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import rootReducer from "./redux/reducer";
import { Provider } from "react-redux";

const Store = createStore(
  rootReducer,
  +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={Store}>
  <BrowserRouter>
    <Main />
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);



