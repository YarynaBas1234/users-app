type IValidation = (value: string) => boolean;

type IValidationWithParam = (value: string, param: number | string) => boolean;

export const isRequired: IValidation = value => !!value;

export const hasNumber: IValidation = value => {
  return !!/^(?=.*\d)/g.test(value);
};

export const hasUpperCase: IValidation = value => {
  return !!/^(?=.*[A-Z])/g.test(value);
};

export const hasLowerCase: IValidation = value => {
  return !!/^(?=.*[a-z])/g.test(value);
};

export const hasLengthBiggerThen: IValidationWithParam = (value, param) => {
  return value.length >= param;
};

export const isStartsFromUpperCase: IValidation = value => {
  return value[0] === value[0].toUpperCase();
};

export const isEmail: IValidation = value => {
  return !!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(value);
};

export const isEqual: IValidationWithParam = (value, param) => {
  return param === value;
};
