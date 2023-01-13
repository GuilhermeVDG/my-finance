import Base from './base';
import UserServices from '../services/user';

export default class User extends Base {
  constructor() {
    super();

    this.userServices = new UserServices();

    this.detail = this.detail.bind(this);
    this.update = this.update.bind(this);
  }

  async detail(req, res) {
    try {
      const response = await this.userServices.detail(req.userId);
      this.handleSuccess(res, response);
    } catch (error) {
      this.handleError(res, error);
    }
  }

  async update(req, res) {
    try {
      const response = await this.userServices.update(req.userId, req.body);
      this.handleSuccess(res, response);
    } catch (error) {
      this.handleError(res, error);
    }
  }
}
