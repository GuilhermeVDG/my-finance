import Sequelize, { Model } from 'sequelize';

export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          defaultValue: '',
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
        },
        password: {
          type: Sequelize.VIRTUAL,
          defaultValue: '',
        },
        password_hash: {
          type: Sequelize.STRING,
          defaultValue: '',
        },
      },
      {
        sequelize,
      },
    );
  }
}
