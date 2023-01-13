import { Router } from 'express';

import UserController from '../controllers/user';

export default class User {
  constructor() {
    this.routes = new Router();

    this.userController = new UserController();
  }

  setup() {
    this.routes.get('/detail', this.userController.detail);
    this.routes.put('/update', this.userController.update);

    return this.routes;
  }
}
