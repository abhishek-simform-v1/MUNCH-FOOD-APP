import { ReactNode, memo } from 'react';
import styled from 'styled-components';
type props = {
  color?: string;
  align?: string;
  md_align?: string;
  sm_align?: string;

  children: ReactNode;
};
const TagLine = ({ color, align, children, md_align, sm_align }: props) => {
  const TagLine = styled.p`
    color: ${color ? color : 'var(--first_color)'};
    line-height: 1.5;
    width: 100%;
    letter-spacing: 1.1px;
    color: var(--accent_color);
    font-family: f_light;
    text-align: ${align ? align : 'left'};
    font-size: var(--tagline_1440);
    @media (max-width: 1440px) {
      font-size: var(--tagline_1440);
    }
    @media (max-width: 1024px) {
      font-size: var(--tagline_1024);
    }
    @media (max-width: 768px) {
      font-size: var(--tagline_768);
      text-align: ${md_align ? md_align : 'left'};
    }
    @media (max-width: 576px) {
      font-size: var(--tagline_576);
      text-align: ${sm_align ? sm_align : 'left'};
    }
    @media (max-width: 400px) {
      font-size: var(--tagline_400);
    }
    @media (max-width: 360px) {
      font-size: var(--tagline_360);
    }
  `;

  return <TagLine>{children}</TagLine>;
};

export default memo(TagLine);
