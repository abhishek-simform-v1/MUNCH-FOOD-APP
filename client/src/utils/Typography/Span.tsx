import { ReactNode, memo } from "react";
import styled from "styled-components";
type props = {
  color?: string;
  align?: string;
  children: ReactNode;
};
const Span = ({ color, align, children }: props) => {
  const Span = styled.span`
    color: ${color ? color : "var(--accent_color)"};
    text-align: ${align ? align : "left"};
    line-height: 1.5;
    letter-spacing: 0.5px;
  `;

  return <Span>{children}</Span>;
};

export default memo(Span);
