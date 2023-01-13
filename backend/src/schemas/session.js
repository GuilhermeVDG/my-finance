import { string, object } from 'yup';

const schemas = {
  store: {
    body:
      object().shape({
        name: string('INVALID_FORMAT').required('NAME_IS_MANDATORY').min(3, 'NAME_MUST_HAVE_MIN_3_CHARACTERS').max(50, 'NAME_MUST_HAVE_MAX_50_CHARACTERS'),
        email: string('INVALID_FORMAT').required('EMAIL_IS_MANDATORY').email('INVALID_EMAIL'),
        password: string('INVALID_FORMAT').required('PASSWORD_IS_MANDATORY').min(6, 'PASSWORD_MUST_HAVE_MIN_6_CHARACTERS'),
      }).noUnknown(),
  },
  login: {
    body:
      object().shape({
        email: string('INVALID_FORMAT').required('EMAIL_IS_MANDATORY').email('INVALID_EMAIL'),
        password: string('INVALID_FORMAT').required('PASSWORD_IS_MANDATORY').min(6, 'PASSWORD_MUST_HAVE_MIN_6_CHARACTERS'),
      }),
  },
};

export default {
  store: object(schemas.store),
  login: object(schemas.login),
};
