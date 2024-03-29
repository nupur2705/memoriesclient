import React from "react";
import ReactDOM from "react-dom/client"; 
import { Provider } from "react-redux";
import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit';
import reducers from './reducers';
import { thunk } from "redux-thunk";
import App from "./App";

const store = configureStore({
  reducer: reducers,
  
},compose(applyMiddleware(thunk)));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);
