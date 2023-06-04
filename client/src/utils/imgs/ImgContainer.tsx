import { memo } from 'react';
import styled from 'styled-components';
type props = {
  src?: string;
  display?: string;
  alt?: string;
  width?: string;
  border_radius?: string;
  height?: string;
};
const ImgContainer = ({
  display,
  src,
  width,
  height,
  alt,
  border_radius,
}: props) => {
  const ImgContainer = styled.img`
    height: 100%;
    width: ${width ? width : '100%'};
    height: ${height ? height : '100%'};
    user-select: none;
    object-fit: cover;
    border-radius: ${border_radius ? border_radius : 'opx'};
    @media (max-width: 1024px) {
      width: ${width ? width : '40%'};
    }
    @media (max-width: 1024px) {
      width: ${width ? width : '40%'};
    }
    @media (max-width: 768px) {
      width: ${width ? width : '40%'};
      display: ${display ? display : 'static'};
    }
    @media (max-width: 576px) {
      width: ${width ? width : '40%'};
    }
  `;

  return <ImgContainer src={src} alt={alt} />;
};

export default memo(ImgContainer);
