import { ReactNode } from 'react';
import styled from 'styled-components';
type props = {
  color?: string;
  border?: string;
  bgColor?: string;
  padding?: string;
  border_radius?: string;
  hover_color?: string;
  hover_bgColor?: string;
  children?: ReactNode;
};
const Button = ({
  color,
  border,
  bgColor,
  padding,
  border_radius,
  children,
  hover_color,
  hover_bgColor,
}: props) => {
  const Button = styled.button`
    background: ${bgColor};
    color: ${color};
    padding: ${padding ? padding : '1rem 1rem'};
    font-weight: 700;
    border: ${border ? `2px solid ${border}` : 'none'};
    cursor: pointer;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    font-family: f_bold;
    border-radius: ${border_radius ? border_radius : 'var(--lg_border_radius)'};
    width: 100;
    &:hover {
      color: ${hover_color ? hover_color : 'var(--first_color)'};
      background-color: ${hover_bgColor
        ? hover_bgColor
        : 'var(--accent_color)'};
      -o-transition: all 0.4s ease-in-out;
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;
    }
  `;
  return <Button>{children}</Button>;
};

export default Button;
