import React from 'react';

import { styled } from '../styles';
import { ISelectEventFunction } from '../types';
import { localStorageService } from '../services';

const Select = styled.select`
  min-height: 24px;
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
    <Select onChange={onChange}>
      {options.map(option => {
        let isSelected = option.value === localStorageService.getFromLocalStorage('language');
        
        return (
          <option value={option.value} selected={isSelected}>
            {option.label}
          </option>
        );
      })}
    </Select>
  );
};
