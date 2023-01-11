import User from '../models/user';

export default class Session {
  async store(data) {
    const { id, name, email } = await User.create(data);

    return {
      id,
      name,
      email,
    };
  }
}
