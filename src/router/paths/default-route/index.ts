import { lazy } from "react";

export const DefaultRoutes = [
  {
    path: "/home",
    element: lazy(() => import("../../../pages/home"))
  }
]