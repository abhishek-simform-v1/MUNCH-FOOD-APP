import { ReactNode, memo } from "react";
import styled from "styled-components";
type props = {
  color?: string;
  align?: string;
  md_align?: string;
  children: ReactNode;
};
const SubTitle = ({ color, align, md_align, children }: props) => {
  const SubTitle = styled.p`
    font-weight: 700;
    color: ${color ? color : "var(--accent_color)"};
    text-align: ${align ? align : "left"};
    font-size: var(--step-3);
    line-height: 1.2;
    font-family: "DM Serif Display", serif;
  `;

  return <SubTitle>{children}</SubTitle>;
};

export default memo(SubTitle);
