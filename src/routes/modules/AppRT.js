import Dashboard from 'pages/Dashboard';
import VideoPlayView from 'pages/VideoPlayView'

const prefix = '';

const routes = [
  {
    path: `${prefix}/dashboard`,
    component: Dashboard,
    exact: true,
  },
  {
    path: `${prefix}/play`,
    component: VideoPlayView,
    exact: true,
  }
];

export default routes;
