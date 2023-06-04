import { ReactNode, memo } from 'react';
import styled from 'styled-components';
type props = {
  color?: string;
  align?: string;
  md_align?: string;
  sm_align?: string;
  children: ReactNode;
};
const Title = ({ color, align, children, md_align, sm_align }: props) => {
  const Title = styled.h1`
    font-size: var(--title_1440);
    color: ${color ? color : 'var(--accent_color)'};
    font-family: f_bold;
    font-weight: 900;
    text-align: ${align ? align : 'left'};
    line-height: 1.2;
    span {
      color: var(--logo_color);
    }
    @media (max-width: 1440px) {
      font-size: var(--title_1440);
    }
    @media (max-width: 1024px) {
      font-size: var(--title_1024);
    }
    @media (max-width: 768px) {
      text-align: ${md_align ? md_align : 'left'};

      font-size: var(--title_768);
    }
    @media (max-width: 576px) {
      text-align: ${sm_align ? sm_align : 'left'};

      font-size: var(--title_576);
    }
    @media (max-width: 400px) {
      font-size: var(--title_400);
    }
    @media (max-width: 360px) {
      font-size: var(--title_360);
    }
  `;
  return <Title>{children}</Title>;
};

export default memo(Title);
