import { IPath } from "../../types/paths"
import { DefaultPaths } from "./default-paths"
import { PostsPaths } from "./posts-paths"

export const Paths: IPath[] = [
  ...DefaultPaths,
  ...PostsPaths
]