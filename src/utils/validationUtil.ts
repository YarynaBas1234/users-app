import * as validation from './formErrorUtil';

export const required = (value: string) => validation.isRequired(value) ? undefined : 'ERRORS.FIELD_REQUIRED';
