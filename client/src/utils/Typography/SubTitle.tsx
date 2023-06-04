import { ReactNode, memo } from 'react';
import styled from 'styled-components';
type props = {
  color?: string;
  align?: string;
  md_align?: string;
  children: ReactNode;
};
const SubTitle = ({ color, align, md_align, children }: props) => {
  const SubTitle = styled.p`
    font-size: var(--subtitle_1440);
    font-weight: 700;
    color: ${color ? color : 'var(--accent_color)'};
    text-align: ${align ? align : 'left'};
    line-height: 1.2;
    font-family: f_bold;
    @media (max-width: 1440px) {
      font-size: var(--subtitle_1440);
    }
    @media (max-width: 1024px) {
      font-size: var(--subtitle_1024);
    }
    @media (max-width: 768px) {
      text-align: ${md_align ? md_align : 'left'};
      font-size: var(--subtitle_768);
    }
    @media (max-width: 576px) {
      font-size: var(--subtitle_576);
    }
    @media (max-width: 400px) {
      font-size: var(--subtitle_400);
    }
    @media (max-width: 360px) {
      font-size: var(--subtitle_360);
    }
  `;

  return <SubTitle>{children}</SubTitle>;
};

export default memo(SubTitle);
