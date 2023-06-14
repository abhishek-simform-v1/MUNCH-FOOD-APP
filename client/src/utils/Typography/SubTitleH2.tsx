import { ReactNode, memo } from "react";
import styled from "styled-components";
type props = {
  color?: string;
  align?: string;
  md_align?: string;
  children: ReactNode;
};
const SubTitleH2 = ({ color, align, md_align, children }: props) => {
  const SubTitleH2 = styled.p`
    font-weight: 500;
    color: ${color ? color : "var(--accent_color)"};
    text-align: ${align ? align : "left"};
    line-height: 1.2;
    font-size: var(--step-1);
    font-family: "DM Serif Display", serif;
  `;

  return <SubTitleH2>{children}</SubTitleH2>;
};

export default memo(SubTitleH2);
