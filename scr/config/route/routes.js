
import SampleRoute from '../../app/sample/sample.route';
import UserRoute from '../../app/auth/UserRoute';
import AuthRoute from '../../app/auth/AuthRoute';

const Routes = [
  {
    url: 'samples',
    route: SampleRoute
  },
  {
    url: 'users',
    route: UserRoute
  },
  {
    url: 'auth',
    route: AuthRoute,
    gaurd: false
  }

];

export default Routes;
