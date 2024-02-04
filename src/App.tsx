import React, { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";

import router from "./routers"

import "./app.css";

const App = () => {
  return <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
}
export default App