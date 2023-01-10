import { Router } from 'express';

export default class Session {
  constructor() {
    this.routes = new Router();
  }

  setup() {
    this.routes.get('/test', (req, res) => res.json({ ok: true }));

    return this.routes;
  }
}