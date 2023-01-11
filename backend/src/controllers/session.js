import SessionServices from '../services/session';

export default class Session {
  constructor() {
    this.store = this.store.bind(this);

    this.sessionServices = new SessionServices();
  }

  async store(req, res) {
    try {
      const response = await this.sessionServices.store(req.body);
      return res.status(200).send(response);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }
}
