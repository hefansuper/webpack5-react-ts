import { createBrowserRouter } from "react-router-dom";

import HelloRoutes from "./Hello";
import NotFoundRoutes from "./NotFound";

const routers = [...HelloRoutes, ...NotFoundRoutes];

export default createBrowserRouter(routers);
