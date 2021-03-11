import React from "react";
import ReactDOM from "react-dom";
import createApi from "./api.js";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { compose } from "recompose";
import  App  from "./components/app/app.jsx";
import { reducer } from "./reducer/reducer.js";
const api = createApi((...args) => store.dispatch(...args));
export const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk.withExtraArgument(api)),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

const init = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
  );
};

init();
