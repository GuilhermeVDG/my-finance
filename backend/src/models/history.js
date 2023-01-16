import Sequelize, { Model } from 'sequelize';

export default class History extends Model {
  static init(sequelize) {
    super.init(
      {
        type: {
          type: Sequelize.STRING,
          defaultValue: '',
        },
        value: {
          type: Sequelize.INTEGER,
          defaultValue: '',
        },
        comment: {
          type: Sequelize.STRING,
          defaultValue: '',
        },
      },
      {
        sequelize,
      },
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });
  }
}
