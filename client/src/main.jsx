import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/Styles/index.css";
import { UserProvider } from "./Context/Context.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
