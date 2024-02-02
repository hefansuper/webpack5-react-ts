import { createBrowserRouter, RouterProvider } from "react-router-dom";

import helloRoutes from "./hello";

const routers = [...helloRoutes];

export default createBrowserRouter(routers);
