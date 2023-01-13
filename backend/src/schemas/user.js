import { string, object } from 'yup';

const schemas = {
  update: {
    body:
      object().shape({
        email: string('INVALID_FORMAT').email('INVALID_EMAIL'),
        name: string('INAVLID_FORMAT').min(3, 'NAME_MUST_HAVE_MIN_3_CHARACTERS').max(50, 'NAME_MUST_HAVE_MAX_50_CHARACTERS'),
        oldPassword: string('INVALID_FORMAT').min(6, 'PASSWORD_MUST_HAVE_MIN_6_CHARACTERS'),
        password: string('INVALID_FORMAT')
          .min(6, 'PASSWORD_MUST_HAVE_MIN_6_CHARACTERS')
          .when('oldPassword', (oldPassword, field) => (oldPassword ? field.required('PASSWORD_IS_MANDATORY') : field)),
      }),
  },
};

export default {
  update: object(schemas.update),
};
