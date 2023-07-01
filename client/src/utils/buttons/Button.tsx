import { ReactNode } from 'react';
import styled from 'styled-components';
type props = {
  border?: string;
  form?: string;
  disabled?: boolean;
  padding?: string;
  border_radius?: string;
  children?: ReactNode;
  onClick?: () => void;
};
const Button = ({
  border,
  form,
  disabled,
  padding,
  border_radius,
  children,
  onClick,
}: props) => {
  const Button = styled.button`
    background: var(--accent_lite);
    color: var(--first_color);
    padding: ${padding ? padding : '0.6rem 0.8rem'};
    font-weight: 700;
    border: ${border ? `2px solid ${border}` : 'none'};
    cursor: pointer;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    font-family: f_bold;
    border-radius: ${border_radius ? border_radius : 'var(--sm_border_radius)'};
    width: 100;
    &:hover {
      color: var(--accent_color);
      background-color: var(--secondary_color);
      -o-transition: all 0.4s ease-in-out;
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;
    }
  `;
  return (
    <Button
      type="submit"
      form={form}
      disabled={disabled ?? false}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default Button;
