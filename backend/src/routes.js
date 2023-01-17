import { Router } from 'express';

import SessionRoutes from './routes/session';
import UserRoutes from './routes/user';
import RegisterRoutes from './routes/register';
import AuthMiddleware from './middlewares/auth';

export default class Routes {
  constructor() {
    this.routes = new Router();

    this.sessionRoutes = new SessionRoutes();
    this.userRoutes = new UserRoutes();
    this.registerRoutes = new RegisterRoutes();
  }

  setup() {
    this.routes.use('/', this.sessionRoutes.setup());
    this.routes.use('/user', AuthMiddleware, this.userRoutes.setup());
    this.routes.use('/history', AuthMiddleware, this.registerRoutes.setup());

    return this.routes;
  }
}
