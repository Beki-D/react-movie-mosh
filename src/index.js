import React from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App tab="home"/>);
//ReactDOM.render(<Counter />, document.getElementById("root"));
