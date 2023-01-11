export default class Base {
  handleException(error, code) {
    return {
      message: error,
      code,
    };
  }
}
