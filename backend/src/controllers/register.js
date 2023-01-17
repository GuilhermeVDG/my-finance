import Base from './base';
import RegisterServices from '../services/register';

export default class Register extends Base {
  constructor() {
    super();

    this.registerServices = new RegisterServices();

    this.store = this.store.bind(this);
    this.list = this.list.bind(this);
  }

  async store(req, res) {
    try {
      const response = await this.registerServices.store(req.userId, req.body);
      this.handleSuccess(res, response);
    } catch (error) {
      this.handleError(res, error);
    }
  }

  async list(req, res) {
    try {
      const response = await this.registerServices.list(req.userId);
      this.handleSuccess(res, response);
    } catch (error) {
      this.handleError(res, error);
    }
  }
}
