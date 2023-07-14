export interface IRoute {
  key: string;
  icon?: string;
  label: string;
  path: string;
  subRoutes?: IRoute[];
  hidden?: boolean;
}