import React, { lazy } from "react";

const HelloPage = lazy(
  () =>
    import(
      /* webpackChunkName: "FirstPage" */
      /*webpackPreload: true*/
      "@/pages/hello"
    )
);

export default [
  {
    path: "/hello",
    element: <HelloPage />,
  },
];
