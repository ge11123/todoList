import React from "react";
import ReactDOM from "react-dom/client";

import Home from "./pages/Home";
import T from "./pages/Temp";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Home />
    {/* <T /> */}
  </React.StrictMode>,
);
