import { ReactNode, memo } from 'react';
import styled from 'styled-components';
type props = {
  color?: string;
  align?: string;
  md_align?: string;
  children: ReactNode;
};
const SubTitleH2 = ({ color, align, md_align, children }: props) => {
  const SubTitleH2 = styled.p`
    font-size: var(--subtitle_768);
    font-weight: 500;
    color: ${color ? color : 'var(--accent_color)'};
    text-align: ${align ? align : 'left'};
    line-height: 1.2;
    font-family: 'DM Serif Display', serif;
    @media (max-width: 1024px) {
      font-size: var(--subtitle_768);
    }
    @media (max-width: 768px) {
      text-align: ${md_align ? md_align : 'left'};
      font-size: var(--subtitle_576);
    }
    @media (max-width: 576px) {
      font-size: var(--subtitle_400);
    }
    @media (max-width: 400px) {
      font-size: var(--subtitle_360);
    }
  `;

  return <SubTitleH2>{children}</SubTitleH2>;
};

export default memo(SubTitleH2);
