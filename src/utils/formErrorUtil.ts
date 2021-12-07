type IValidation = (value: string) => boolean;

export const isRequired: IValidation = value => !!value;

export const hasNumber: IValidation = value => {
  return !!/^(?=.*[0-9])[0-9a-zA-Z!@#$%^&*]{0,}$/g.test(value);
};

export const hasUpperCase: IValidation = value => {
  return !!/^(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{0,}$/g.test(value);
};

export const hasLowerCase: IValidation = value => {
  return !!/^(?=.*[a-z])[0-9a-zA-Z!@#$%^&*]{0,}$/g.test(value);
};

export const hasLengthBiggerThen = (param: number, value: string) => {
  return value.length >= param;
};

export const isStartFromUpperCase: IValidation = value => {
  return value[0] === value[0].toUpperCase();
};

export const isEmail: IValidation = value => {
  return !!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(value);
};

export const isEqual = (password: string, value: string) => {
  return password === value;
};
