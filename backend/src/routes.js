import { Router } from "express";

import SessionRoutes from "./routes/session";

export default class Routes {
  constructor(){
    this.routes = new Router();

    this.sessionRoutes = new SessionRoutes();
  }

  setup(){
    this.routes.use('/', this.sessionRoutes.setup());

    return this.routes;
  }
}