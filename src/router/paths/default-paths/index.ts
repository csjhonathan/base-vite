import { lazy } from "react";
import { IPath } from "../../../types/paths";

export const DefaultPaths: IPath[] = [
  {
    path: "/",
    element: lazy(() => import("../../../pages/home"))
  }
]