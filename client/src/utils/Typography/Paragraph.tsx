import { ReactNode, memo } from 'react';
import styled from 'styled-components';
type props = {
  color?: string;
  align?: string;
  md_align?: string;
  children: ReactNode;
};
const Paragraph = ({ color, md_align, align, children }: props) => {
  const Paragraph = styled.p`
    color: ${color ? color : 'var(--accent_color)'};
    text-align: ${align ? align : 'left'};
    line-height: 1.5;
    letter-spacing: 0.5px;
    font-size: var(--paragraph_1440);
    @media (max-width: 1440px) {
      font-size: var(--paragraph_1440);
    }
    @media (max-width: 1024px) {
      font-size: var(--paragraph_1024);
    }
    @media (max-width: 768px) {
      font-size: var(--paragraph_768);
      text-align: ${md_align ? md_align : 'left'};
    }
    @media (max-width: 576px) {
      font-size: var(--paragraph_576);
    }
    @media (max-width: 400px) {
      font-size: var(--paragraph_400);
    }
    @media (max-width: 360px) {
      font-size: var(--paragraph_360);
    }
  `;

  return <Paragraph>{children}</Paragraph>;
};

export default memo(Paragraph);
