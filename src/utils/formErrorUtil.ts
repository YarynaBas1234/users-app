type IValidationSimple = (value: string) => boolean;

type IValidationWithParam = (param: number | string, value: string) => boolean;

export const isRequired: IValidationSimple = value => !!value;

export const hasNumber: IValidationSimple = value => {
  return !!/^(?=.*\d)/g.test(value);
};

export const hasUpperCase: IValidationSimple = value => {
  return !!/^(?=.*[A-Z])/g.test(value);
};

export const hasLowerCase: IValidationSimple = value => {
  return !!/^(?=.*[a-z])/g.test(value);
};

export const hasLengthBiggerThen: IValidationWithParam = (param, value) => {
  return value.length >= param;
};

export const isStartsFromUpperCase: IValidationSimple = value => {
  return value[0] === value[0].toUpperCase();
};

export const isEmail: IValidationSimple = value => {
  return !!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(value);
};

export const isEqual: IValidationWithParam = (param, value) => {
  return param === value;
};
