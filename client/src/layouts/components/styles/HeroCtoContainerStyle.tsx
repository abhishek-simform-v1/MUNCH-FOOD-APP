import styled from "styled-components";
import heroImg from "./../../../assets/menu.png";

export const HeroContainer = styled.div`
  height: 100%;
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 3.5rem;
  padding: 0rem 5rem 0rem;
  position: relative;
  justify-content: space-between;
  /* border: 12px solid var(--secondory_color); */
  border-radius: var(--x4l-border-radius);
  /* background: linear-gradient(145deg, var(--accent_color), var(--logo-color)); */
  @media (max-width: 1024px) {
    padding: 0rem 2.5rem 0rem;
    flex-direction: column;
  }
  @media (max-width: 768px) {
    padding: 0rem 1.5rem 0rem;
  }
  @media (max-width: 568px) {
    padding: 0rem 0.5rem 0rem;
    border-radius: 0;
  }
`;
export const HeroTextContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 50%;

  align-items: flex-start;
  & p {
    color: var(--accent_color);
  }
  @media (max-width: 1024px) {
    width: 100%;
    align-items: center;
  }
`;

export const HeroButtons = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
export const ImgContainer = styled.div`
  display: flex;
  place-content: center;
  position: relative;
`;
export const HeroTitle = styled.p`
  font-size: 45px;
  letter-spacing: -1px;
  line-height: 1.2;
  font-weight: 900;
  font-family: f_bold;
  color: var(--accent_color);
  span {
    color: var(--logo-color);
  }
  @media (max-width: 1024px) {
    text-align: center;
  }
  @media (max-width: 568px) {
    text-align: center;
  }
`;

export const ImgContainerImg = styled.img`
  width: 100%;
  /* @media (max-width: 1024px) {
    width: 300px;
  }
  @media (max-width: 768px) {
    width: 200px;
  } */
`;
