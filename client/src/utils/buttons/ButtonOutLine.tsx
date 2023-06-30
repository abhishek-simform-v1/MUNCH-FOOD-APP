import { ReactNode } from "react";
import styled from "styled-components";
type props = {
  color?: string;
  border?: string;
  bgColor?: string;
  padding?: string;
  border_radius?: string;
  hover_color?: string;
  hover_bgColor?: string;
  onClick?: () => void;

  children?: ReactNode;
};
const ButtonOutLine = ({
  border,
  onClick,
  padding,
  border_radius,
  children,
}: props) => {
  const ButtonOutLine = styled.button`
    background: var(--secondary_transparent);
    color: var(--accent_color);
    padding: ${padding ? padding : "0.6rem 0.8rem"};

    font-weight: 700;
    border: ${border ? `2px solid ${border}` : "none"};
    cursor: pointer;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    font-family: f_bold;
    border-radius: ${border_radius ? border_radius : "var(--lg_border_radius)"};
    width: 100;
    &:hover {
      color: var(--accent_color);
      background-color: var(--secondary_color);
      -o-transition: all 0.4s ease-in-out;

      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;
    }
  `;
  return <ButtonOutLine onClick={onClick}>{children}</ButtonOutLine>;
};

export default ButtonOutLine;
