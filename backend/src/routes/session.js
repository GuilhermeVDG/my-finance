import { Router } from 'express';

import SessionController from '../controllers/session';

import SchemaValidator from '../middlewares/schemaValidator';
import sessionSchemas from '../schemas/session';

export default class Session {
  constructor() {
    this.routes = new Router();

    this.sessionController = new SessionController();
  }

  setup() {
    this.routes.post('/store', SchemaValidator.validate(sessionSchemas.store), this.sessionController.store);
    this.routes.post('/login', SchemaValidator.validate(sessionSchemas.login), this.sessionController.login);

    return this.routes;
  }
}
