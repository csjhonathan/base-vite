export interface IPath {
  id: string;
  display?: string;
  path: string;
  element: React.LazyExoticComponent<() => JSX.Element>;
}