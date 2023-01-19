/* eslint-disable camelcase */
import Base from './base';
import User from '../models/user';
import History from '../models/history';

export default class Register extends Base {
  async store(userId, data) {
    const user = await User.findByPk(userId);

    if (!user) throw this.handleException('USER_NOT_FOUND', 400);

    if (data.type === 'expense' && user.amount < data.value) throw this.handleException('INVALID_VALUE');

    // eslint-disable-next-line no-unused-expressions
    data.type === 'receive' ? user.amount += data.value : user.amount -= data.value;

    const { amount } = await user.update({ amount: user.amount });

    const {
      id, type, value, comment, user_id, createdAt,
    } = await History.create({ ...data, user_id: userId });

    return {
      id,
      type,
      value,
      comment,
      user_id,
      user_amount: amount,
      createdAt,
    };
  }

  async list(userId) {
    const history = await History.findAll({
      where: {
        user_id: userId,
      },
      attributes: ['id', 'type', 'value', 'createdAt'],
      order: [['id', 'DESC']],
    });

    if (!history.length) throw this.handleException('HISTORY_NOT_FOUND', 400);

    return history;
  }

  async detail(registerId) {
    const register = await History.findByPk(registerId);

    if (!register) throw this.handleException('REGISTER_NOT_FOUND', 400);

    const {
      id, type, value, comment, createdAt,
    } = register;

    return {
      id,
      type,
      value,
      comment,
      createdAt,
    };
  }

  async delete(userId, registerId) {
    const register = await History.findByPk(registerId);

    const user = await User.findByPk(userId);

    if (!register) throw this.handleException('REGISTER_NOT_FOUND', 400);

    if (register.type === 'receive' && register.value > user.amount) throw this.handleException('INVALID_VALUE', 400);

    // eslint-disable-next-line no-unused-expressions
    register.type === 'receive' ? user.amount -= register.value : user.amount += register.value;

    const { amount } = await user.update({ amount: user.amount });

    await register.destroy();

    return {
      ok: true,
      amount,
    };
  }
}
