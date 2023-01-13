import Base from './base';
import UserServices from '../services/user';

export default class User extends Base {
  constructor() {
    super();

    this.userServices = new UserServices();

    this.detail = this.detail.bind(this);
  }

  async detail(req, res) {
    try {
      const response = await this.userServices.detail(req.userId);
      this.handleSuccess(res, response);
    } catch (error) {
      this.handleError(res, error);
    }
  }
}
