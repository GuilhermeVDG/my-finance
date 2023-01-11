import User from '../models/user';
import Base from './base';

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
}
