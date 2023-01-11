import express from 'express';
import Routes from './routes';

import './database';

export default class App {
  constructor() {
    this.app = express();
    this.routes = new Routes();

    this.app.use(express.json());

    this.app.use(this.routes.setup());
  }

  startServer() {
    this.app.listen(3080, () => {
      console.log('Server started in port 3080');
    });
  }
}
