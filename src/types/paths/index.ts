export interface IPath {
  path: string;
  element: React.LazyExoticComponent<() => JSX.Element>;
}