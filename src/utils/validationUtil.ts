import * as validation from './formErrorUtil';

export const required = (value: string) => validation.isRequired(value) ? undefined : 'FIELD_REQUIRED';
