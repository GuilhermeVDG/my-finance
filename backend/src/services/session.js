import jwt from 'jsonwebtoken';
import User from '../models/user';
import Base from './base';
import authConfig from '../config/auth';

export default class Session extends Base {
  async store(data) {
    const emailExists = await User.findOne({
      where: {
        email: data.email,
      },
    });

    if (emailExists) {
      throw this.handleException('EMAIL_MUST_BEEN_UNIQUE', 400);
    }

    const { id, name, email } = await User.create(data);

    return {
      id,
      name,
      email,
    };
  }

  async login(data) {
    const user = await User.findOne({
      where: {
        email: data.email,
      },
    });

    if (!user) throw this.handleException('INVALID_EMAIL', 400);

    if (!(await user.checkPassword(data.password))) throw this.handleException('INVALID_PASSWORD', 400);

    const { id, name, email } = user;

    const token = jwt.sign({ id, name, email }, authConfig.secret, {
      expiresIn: authConfig.expiresIn,
    });

    return {
      token,
      user: {
        id,
        name,
        email,
      },
    };
  }
}
