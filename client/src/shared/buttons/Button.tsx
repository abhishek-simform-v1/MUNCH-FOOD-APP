import React, { ReactHTMLElement } from "react";
import styled from "styled-components";
type props = {
  typeOfBtn: string;
  btnfor: string | HTMLElement;
  color: string;
  border: string;
  bgColor: string;
  padding: string;
};
const Button = ({
  typeOfBtn,
  btnfor,
  color,
  border,
  bgColor,
  padding,
}: props) => {
  const Button = styled.button`
    background: ${bgColor};
    color: ${color};
    padding: ${padding ? padding : "1rem 1rem"};
    font-weight: 700;
    border: 2px solid ${border};
    cursor: pointer;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    font-family: f_bold;
    border-radius: var(--xl-border-radius);
    &:hover {
      color: var(--first_color);
      -o-transition: all 0.4s ease-in-out;
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;
      background: var(--accent_color);
    }
  `;
  return <Button type={typeOfBtn}>{btnfor}</Button>;
};

export default Button;
