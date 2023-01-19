import {
  string, object, number,
} from 'yup';

const schemas = {
  store: {
    body:
      object().shape({
        type: string('INVALID_FORMAT').required('TYPE_IS_MANDATORY'),
        value: number('INVALID_FORMAT').positive('VALUE_MUST_BE_POSITIVE').required('VALUE_IS_MANDATORY'),
        comment: string('INVALID_FORMAT').min(1, 'COMMENT_MUST_HAVE_MIN_1_CHARACTER').max(50, 'COMMENT_MUST_HAVE_MAX_50_CHARACTERS'),
      }).noUnknown(),
  },
  detail: {
    params:
      object().shape({
        id: number('INVALID_FORMAT').required('ID_IS_MANDATORY'),
      }).noUnknown(),
  },
};

export default {
  store: object(schemas.store),
  detail: object(schemas.detail),
  delete: object(schemas.detail),
};
