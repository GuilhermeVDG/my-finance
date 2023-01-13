import { Router } from 'express';

import UserController from '../controllers/user';

export default class User {
  constructor() {
    this.routes = new Router();

    this.userController = new UserController();
  }

  setup() {
    this.routes.get('/detail', this.userController.detail);

    return this.routes;
  }
}
