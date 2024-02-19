import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import { inject } from '@vercel/analytics';
 
inject();
ReactDOM.createRoot(document.getElementById("root")).render(
  
    <App />

);
