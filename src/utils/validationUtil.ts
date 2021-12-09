import * as validation from './formErrorUtil';

type IValidation = (value: string) => string | undefined | object;

type IValidationLengthBiggerThen = (length: number) => (value: string) => string | undefined | object;

type IValidationLabels = (valueConfirm: string, label: string, labelConfirm: string) => (value: string) => string | undefined | object;

type ICombineValidators = (...validations: IValidation[]) => (value: string) => string | undefined | object;

export const combineValidators: ICombineValidators = (...validations) => (value) => {
  for (let i = 0; i < validations.length; i++) {
    const error = validations[i](value);
    if (error) {
      return error;
    }
  }
};

export const required: IValidation = value => {
  return validation.isRequired(value) ? undefined : 'ERRORS.FIELD_REQUIRED';
};

export const number: IValidation = value => {
  return validation.hasNumber(value) ? undefined : 'ERRORS.NUMBER';
};

export const upperCase: IValidation = value => {
  return validation.hasUpperCase(value) ? undefined : 'ERRORS.UPPER_CASE';
};

export const lowerCase: IValidation = value => {
  return validation.hasLowerCase(value) ? undefined : 'ERRORS.LOWER_CASE';
};

export const lengthBiggerThen: IValidationLengthBiggerThen = length => value => {
  return validation.hasLengthBiggerThen(value, length) ? undefined : { error: 'ERRORS.LENGTH_BIGGER_THEN', parameters: { length } };
};

export const startsFromUpperCase: IValidation = value => {
  return validation.isStartsFromUpperCase(value) ? undefined : 'ERRORS.START_FROM_UPPERCASE';
};

export const email: IValidation = value => {
  return validation.isEmail(value) ? undefined : 'ERRORS.EMAIL';
};

export const checkEquality: IValidationLabels = (valueConfirm, label, labelConfirm) => value => {
  return validation.isEqual(value, valueConfirm) ? undefined : { error: 'ERRORS.SAME_FIELDS', parameters: { label, labelConfirm } };
};
