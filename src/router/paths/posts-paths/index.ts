import { lazy } from "react";
import { IPath } from "../../../types/paths";

export const PostsPaths: IPath[] = [
  {
    path: "/posts",
    element: lazy(() => import("../../../pages/posts"))
  }
]