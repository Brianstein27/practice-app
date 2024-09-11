import React from "react";
import { StrictMode } from 'react';
import './css/index.css'
import { createRoot } from "react-dom";
import App from "./App";
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
