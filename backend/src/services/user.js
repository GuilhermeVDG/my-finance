import Base from './base';
import User from '../models/user';

export default class Users extends Base {
  async detail(userId) {
    console.log('oi');

    if (!userId) this.handleException('INVALID_ID', 400);

    const user = await User.findByPk(userId);

    if (!user) this.handleException('USER_NOT_FOUND', 400);

    const { id, name, email } = user;

    return {
      id,
      name,
      email,
    };
  }
}
