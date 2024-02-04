import React, { lazy } from "react";

const FirstPage = lazy(
  () =>
    import(
      /* webpackChunkName: "FirstPage" */
      /*webpackPreload: true*/
      "@/pages/Hello"
    )
);

export default [
  {
    path: "/firstPage",
    element: <FirstPage />,
  },
];
