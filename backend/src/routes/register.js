import { Router } from 'express';

import RegisterController from '../controllers/register';

export default class Register {
  constructor() {
    this.routes = new Router();

    this.registerController = new RegisterController();
  }

  setup() {
    this.routes.post('/store', this.registerController.store);
    this.routes.get('/list', this.registerController.list);
    this.routes.get('/detail/:id', this.registerController.detail);

    return this.routes;
  }
}
