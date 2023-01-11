export default class Base {
  handleSuccess(res, data) {
    res.status(200).json({
      status: 'success',
      code: 200,
      body: data,
    });
  }

  handleError(res, error) {
    console.log(error);

    res.status(400).json({
      status: 'error',
      code: error.code || 400,
      message: error.message || 'SOMETHING_WRONG_HAPPENED',
    });
  }
}
