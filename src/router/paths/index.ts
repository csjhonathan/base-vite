import { IPath } from "../../types/paths"
import { DefaultPaths } from "./default-paths"
import { PostsPaths } from "./posts-paths"

export const Paths: IPath[] = [
  ...DefaultPaths,
  ...PostsPaths
  ];
  
(() => {
  const paths_ids_hash : {[key: string]: boolean} = {};
  Paths.forEach((path) => {
    if (paths_ids_hash[path.id]) {
      throw new Error(`O id ${path.id} para a rota ${path.path} já foi utilizado. Utilize um id único para cada rota.`);
    }
    paths_ids_hash[path.id] = true;
  })
})()