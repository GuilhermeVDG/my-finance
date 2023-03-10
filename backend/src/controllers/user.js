import Base from './base';
import UserServices from '../services/user';

export default class User extends Base {
  constructor() {
    super();

    this.userServices = new UserServices();

    this.detail = this.detail.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
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
      const response = await this.userServices.update(req.userId, req.data);
      this.handleSuccess(res, response);
    } catch (error) {
      this.handleError(res, error);
    }
  }

  async delete(req, res) {
    try {
      const response = await this.userServices.delete(req.userId);
      this.handleSuccess(res, response);
    } catch (error) {
      this.handleError(res, error);
    }
  }
}
