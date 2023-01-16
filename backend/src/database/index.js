import Sequelize from 'sequelize';
import dataBaseConfig from '../config/database';
import User from '../models/user';
import History from '../models/history';

const models = [User, History];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dataBaseConfig);

    models.map((model) => model.init(this.connection));
    models.map((model) => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
