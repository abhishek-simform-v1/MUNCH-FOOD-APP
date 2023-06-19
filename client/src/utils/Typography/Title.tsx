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
    color: ${color ? color : 'var(--accent_color)'};
    font-family: 'DM Serif Display', serif;
    font-weight: 900;
    text-align: ${align ? align : 'left'};
    text-wrap: balance;
    line-height: 1;
    font-size: var(--step-4);
    span {
      color: var(--logo_color);
    }

    @media (max-width: 768px) {
      text-align: ${md_align ? md_align : 'left'};
    }
    @media (max-width: 576px) {
      text-align: ${sm_align ? sm_align : 'left'};
    }
  `;
  return <Title>{children}</Title>;
};

export default memo(Title);
