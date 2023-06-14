import { ReactNode, memo } from "react";
import styled from "styled-components";
type props = {
  color?: string;
  align?: string;
  md_align?: string;
  sm_align?: string;

  children: ReactNode;
};
const TagLine = ({ color, align, children, md_align, sm_align }: props) => {
  const TagLine = styled.p`
    color: ${color ? color : "var(--first_color)"};
    line-height: 1.5;
    width: 100%;
    letter-spacing: 1.1px;
    color: var(--accent_color);
    text-wrap: balance;
    font-family: f_light;
    font-size: var(--step-1);
    text-align: ${align ? align : "left"};

    @media (max-width: 768px) {
      text-align: ${md_align ? md_align : "left"};
    }
    @media (max-width: 576px) {
      text-align: ${sm_align ? sm_align : "left"};
    }
  `;

  return <TagLine>{children}</TagLine>;
};

export default memo(TagLine);
