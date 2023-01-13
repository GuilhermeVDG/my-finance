export default class SchemaValidator {
  static validate(schema) {
    return async (req, res, next) => {
      try {
        const validation = {
          body: req.body,
          params: req.params,
          query: req.query,
        };

        await schema.validate(validation, {
          stripUnknown: true,
          recursive: true,
        });

        req.data = req.body;
        req.filter = { ...req.params, ...req.query };

        return next();
      } catch (error) {
        console.log(error);

        return res.status(400).json({
          status: 'error',
          code: 400,
          body: {
            error: error.message,
          },
        });
      }
    };
  }
}
