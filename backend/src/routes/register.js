import { Router } from 'express';

import RegisterController from '../controllers/register';

import SchemaValidator from '../middlewares/schemaValidator';
import registerSchemas from '../schemas/register';

export default class Register {
  constructor() {
    this.routes = new Router();

    this.registerController = new RegisterController();
  }

  setup() {
    this.routes.post('/store', SchemaValidator.validate(registerSchemas.store), this.registerController.store);
    this.routes.get('/list', this.registerController.list);
    this.routes.get('/detail/:id', SchemaValidator.validate(registerSchemas.detail), this.registerController.detail);

    return this.routes;
  }
}
