import React, { lazy } from "react";

const NotFoundPage = lazy(
  () =>
    import(
      /* webpackChunkName: "NotFoundPage" */
      /*webpackPreload: true*/
      "@/pages/NotFound"
    )
);

const FirstPage = lazy(
  () =>
    import(
      /* webpackChunkName: "FirstPage" */
      "@/pages/Hello"
    )
);

export default [
  {
    path: "*",
    element: <FirstPage />,
  },
];
