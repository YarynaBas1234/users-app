import * as validation from './formErrorUtil';

type IValidation = (value: string) => string | undefined;

type ICombineValidators = (...validations: IValidation[]) => (value: string) => string | undefined;

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

export const lengthBiggerThen = (param: number) => (value: string) => {
  return validation.hasLengthBiggerThen(param, value) ? undefined : 'ERRORS.LENGTH_BIGGER_THEN';
};

export const startFromUpperCase: IValidation = value => {
  return validation.isStartFromUpperCase(value) ? undefined : 'ERRORS.START_FROM_UPPERCASE';
};

export const email: IValidation = value => {
  return validation.isEmail(value) ? undefined : 'ERRORS.EMAIL';
};

export const equalPasswords = (password: string) => (value: string) => {
  return validation.isEqual(password, value) ? undefined : 'ERRORS.SAME_PASSWORDS';
};
