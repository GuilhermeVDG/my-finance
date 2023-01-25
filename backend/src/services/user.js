import Base from './base';
import User from '../models/user';

export default class Users extends Base {
  async detail(userId) {
    if (!userId) throw this.handleException('INVALID_ID', 400);

    const user = await User.findByPk(userId);

    if (!user) throw this.handleException('USER_NOT_FOUND', 400);

    const {
      id, name, email, amount,
    } = user;

    return {
      id,
      name,
      email,
      amount,
    };
  }

  async update(userId, data) {
    const user = await User.findByPk(userId);

    if (!user) throw this.handleException('USER_NOT_FOUND', 400);

    if (data.password && !(await user.checkPassword(data.oldPassword))) {
      throw this.handleException('PASSWORD_WRONG', 401);
    }

    if (data.email && (data.email !== user.email)) {
      const emailUsed = await User.findOne({
        where: {
          email: data.email,
        },
      });

      if (emailUsed) throw this.handleException('EMAIL_IS_BEEN_USED', 401);
    }

    const { id, name, email } = await user.update(data);

    return {
      id,
      name,
      email,
    };
  }

  async delete(userId) {
    const user = await User.findByPk(userId);

    if (!user) throw this.handleException('USER_NOT_FOUND', 400);

    await user.destroy();

    return {
      ok: true,
    };
  }
}
