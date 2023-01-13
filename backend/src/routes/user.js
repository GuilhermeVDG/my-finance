import { Router } from 'express';

import UserController from '../controllers/user';
import userSchemas from '../schemas/user';
import SchemaValidator from '../middlewares/schemaValidator';

export default class User {
  constructor() {
    this.routes = new Router();

    this.userController = new UserController();
  }

  setup() {
    this.routes.get('/detail', this.userController.detail);
    this.routes.put('/update', SchemaValidator.validate(userSchemas.update), this.userController.update);

    return this.routes;
  }
}
