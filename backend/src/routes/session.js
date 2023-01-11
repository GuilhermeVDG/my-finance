import { Router } from 'express';

import SessionController from '../controllers/session';

export default class Session {
  constructor() {
    this.routes = new Router();

    this.sessionController = new SessionController();
  }

  setup() {
    this.routes.post('/store', this.sessionController.store);

    return this.routes;
  }
}
