import { ReactNode, memo } from 'react';
import styled from 'styled-components';
type props = {
  f_direction?: string;
  gap?: string;
  padding?: string;
  justify_content?: string;
  align_item?: string;
  wrap?: string;
  width?: string;
  height?: string;
  md_f_direction?: string;
  sm_f_direction?: string;
  md_justify_content?: string;
  md_align_item?: string;
  sm_justify_content?: string;
  sm_align_item?: string;
  border_radius?: string;
  color?: string;
  src?: string;
  border?: string;
  bgColor?: string;
  backdrop?: string;
  children: ReactNode;
};
const FlexContainer = ({
  children,
  color,
  bgColor,
  f_direction,
  border,
  gap,
  justify_content,
  align_item,
  wrap,
  padding,
  md_f_direction,
  sm_f_direction,
  width,
  height,
  md_justify_content,
  md_align_item,
  sm_justify_content,
  sm_align_item,
  src,
  border_radius,
  backdrop,
}: props) => {
  const FlexContainer = styled.div`
    border-radius: ${border_radius ? border_radius : '0'};
    border: ${border ? `2px solid ${border}` : 'none'};
    display: flex;
    /* overflow: hidden; */
    background-color: ${bgColor ? bgColor : 'transparent'};
    color: ${color ? color : 'var(--accent_color)'};
    width: ${width ? width : '100%'};
    height: ${height ? height : '100%'};
    flex-direction: ${f_direction ? f_direction : 'row'};
    gap: ${gap};
    padding: ${padding ? padding : '0px'};
    align-items: ${align_item ? align_item : 'center'};
    justify-content: ${justify_content ? justify_content : 'center'};
    flex-wrap: ${wrap ? wrap : 'no-wrap'};
    @media (max-width: 1440px) {
      gap: ${gap ? gap : 'var(--paragraph_1440)'};
    }
    @media (max-width: 1024px) {
      gap: var(--paragraph_1024);
    }
    @media (max-width: 768px) {
      flex-direction: ${md_f_direction ? md_f_direction : f_direction};
      background-image: url(${src});
      background-repeat: no-repeat;
      background-size: cover;

      /* backdrop-filter: ${backdrop ? `blur(262px)` : 'none'}; */
      backdrop-filter: blur(10px);
      align-items: ${md_align_item ? md_align_item : align_item};
      width: 100%;

      justify-content: ${md_justify_content
        ? md_justify_content
        : justify_content};
    }

    @media (max-width: 400px) {
      flex-direction: ${sm_f_direction ? sm_f_direction : md_f_direction};
      align-items: ${sm_align_item ? sm_align_item : md_align_item};
      justify-content: ${sm_justify_content
        ? sm_justify_content
        : md_justify_content};
    }
  `;

  return <FlexContainer>{children}</FlexContainer>;
};

export default memo(FlexContainer);
