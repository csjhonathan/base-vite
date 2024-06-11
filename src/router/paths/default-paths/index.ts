import { lazy } from "react";

export const DefaultPaths = [
  {
    path: "/home",
    element: lazy(() => import("../../../pages/home"))
  }
]