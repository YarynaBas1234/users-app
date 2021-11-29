import { styled } from 'styles';

interface IButtonTextProps {
  isPrimary?: boolean;
  isBold?: boolean;
}

export const ButtonText = styled.span<IButtonTextProps>`
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.75px;
  color: ${({ theme, isPrimary }) => isPrimary ? theme.colors.primary : theme.colors.black}
`;

export const H1 = styled.span<IButtonTextProps>`
  font-style: normal;
  ${({ isBold }) => isBold && 'font-weight: bold'};
  font-size: 34px;
  line-height: 44px;
`;

export const H2 = styled.span<IButtonTextProps>`
  font-style: normal;
  ${({ isBold }) => isBold && 'font-weight: bold'};
  font-size: 28px;
  line-height: 42px;
`;

export const H3 = styled.span<IButtonTextProps>`
  ${({ isBold }) => isBold && 'font-weight: bold'};
  font-size: 22px;
  line-height: 29px;
  letter-spacing: 0.0025em;
`;

export const H4 = styled.span<IButtonTextProps>`
  font-style: normal;
  ${({ isBold }) => isBold && 'font-weight: bold'};
  font-size: 20px;
  line-height: 26px;
`;
