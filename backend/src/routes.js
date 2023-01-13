import { Router } from 'express';

import SessionRoutes from './routes/session';
import UserRoutes from './routes/user';
import AuthMiddleware from './middlewares/auth';

export default class Routes {
  constructor() {
    this.routes = new Router();

    this.sessionRoutes = new SessionRoutes();
    this.userRoutes = new UserRoutes();
  }

  setup() {
    this.routes.use('/', this.sessionRoutes.setup());
    this.routes.use('/user', AuthMiddleware, this.userRoutes.setup());

    return this.routes;
  }
}
