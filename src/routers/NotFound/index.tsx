import React, { lazy } from "react";

const NotFoundPage = lazy(
  () =>
    import(
      /* webpackChunkName: "NotFoundPage" */
      /*webpackPreload: true*/
      "@/pages/NotFound"
    )
);

export default [
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
