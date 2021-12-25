import React from 'react';

import { styled } from '../styles';
import { ISelectEventFunction } from '../types';
import { currentLanguage } from '../consts';

const SelectWrapper = styled.select`
  max-height: 24px;
  height: 100%;
`;

interface IDropDownProps {
  onChange: ISelectEventFunction;
  options: {
    value: string;
    label: string;
  }[];
}

export const DropDown: React.FC<IDropDownProps> = (props) => {
  const { onChange, options } = props;

  return (
    <SelectWrapper onChange={onChange}>
      {options.map(option => {
        return <option value={option.value} selected={option.value === currentLanguage}>
          {option.label}
        </option>
      })}
    </SelectWrapper>
  );
};
