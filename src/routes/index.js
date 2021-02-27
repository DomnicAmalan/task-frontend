import AppRoute from './modules/AppRT';
import { CommonLayout }  from 'layouts'

const listRoutes = [
  {
    layout: CommonLayout,
    routes: [...AppRoute],
  },
];

export default listRoutes;
