import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter} from "react-router-dom";
import AppContextProvider from "./component/context/appContext";

ReactDom.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <App/>
      </AppContextProvider>
    </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
    );
    