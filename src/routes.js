import AuthContainer from './containers/AuthContainer';
import HomeContainer from './containers/HomeContainer';

const ROUTE_PATHS = {
  root: '/',
  auth: '/auth'
};

const routes = [
  {
    path: ROUTE_PATHS.root,
    component: HomeContainer,
    exact: true
  },
  {
    path: ROUTE_PATHS.auth,
    component: AuthContainer,
    exact: true
  }
];

export { ROUTE_PATHS, routes };
