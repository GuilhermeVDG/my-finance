import SessionServices from '../services/session';
import Base from './base';

export default class Session extends Base {
  constructor() {
    super();

    this.store = this.store.bind(this);
    this.login = this.login.bind(this);

    this.sessionServices = new SessionServices();
  }

  async store(req, res) {
    try {
      const response = await this.sessionServices.store(req.body);
      this.handleSuccess(res, response);
    } catch (error) {
      this.handleError(res, error);
    }
  }

  async login(req, res) {
    try {
      const response = await this.sessionServices.login(req.body);
      this.handleSuccess(res, response);
    } catch (error) {
      this.handleError(res, error);
    }
  }
}
