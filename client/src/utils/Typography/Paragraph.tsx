import { ReactNode, memo } from "react";
import styled from "styled-components";
type props = {
  color?: string;
  align?: string;
  md_align?: string;
  className?: string;
  children: ReactNode;
};
const Paragraph = ({ className, color, align, children }: props) => {
  const Paragraph = styled.p`
    color: ${color ? color : "var(--accent_color)"};
    text-align: ${align ? align : "left"};
    line-height: 1.6;
    font-size: var(--step-0);
    letter-spacing: 0.5px;
  `;

  return <Paragraph className={className}>{children}</Paragraph>;
};

export default memo(Paragraph);
