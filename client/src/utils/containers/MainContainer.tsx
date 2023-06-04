import { ReactNode, memo } from 'react';
import styled from 'styled-components';
type props = {
  padding?: string;
  bgColor?: string;
  src?: string;
  margin?: string;
  border_radius?: string;
  children: ReactNode;
};
const MainContainer = ({
  children,
  padding,
  margin,
  bgColor,
  src,
  border_radius,
}: props) => {
  const MainContainer = styled.div`
    height: 100%;
    max-width: 1400px !important;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${bgColor ? bgColor : 'transparent'};
    padding: ${padding ? padding : '25px'} 50px;
    margin: ${margin ? margin : '0px'} auto;
    border-radius: ${border_radius ? border_radius : '0'};
    gap: var(--title_1440);
    @media (max-width: 1440px) {
      gap: var(--title_1440);
    }
    @media (max-width: 1024px) {
      gap: var(--title_1024);
    }
    @media (max-width: 768px) {
      background-image: url(${src});
      background-repeat: no-repeat;
      background-size: cover;
      padding: ${padding ? padding : '25px'} 30px;
    }
    @media (max-width: 576px) {
      padding: ${padding ? padding : '25px'} 20px;
    }
  `;

  return <MainContainer>{children}</MainContainer>;
};

export default memo(MainContainer);
