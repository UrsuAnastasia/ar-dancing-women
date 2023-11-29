import React from "react";
import ReactDOM from "react-dom/client";

import { XrOverlayContainer } from "./components/xr-model/XrOverlayContainer.jsx";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <XrOverlayContainer />
  </React.StrictMode>
);
