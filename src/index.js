import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Routers } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Routers>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Routers>
  </React.StrictMode>
);

reportWebVitals();
