import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const MenuTextContainer = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const MenuImgContainer = styled.div`
  display: flex;
  place-content: center;
  position: relative;
  img {
    width: 50% !important;
  }
`;
