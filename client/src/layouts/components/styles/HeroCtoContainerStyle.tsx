import styled from "styled-components";
export const HeroContainer = styled.div`
  height: 100%;
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 3.5rem;
  padding: 0rem 5rem 0rem;
  border-radius: var(--x4l-border-radius);
  position: relative;
  justify-content: space-between;
  background: linear-gradient(145deg, var(--accent_color), var(--logo-color));
  @media (max-width: 1024px) {
    padding: 2rem 2.5rem 0rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (max-width: 568px) {
    border-radius: 0;
    width: 100vw;
  }
`;
export const HeroTextContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  align-items: flex-start;
  @media (max-width: 768px) {
    align-items: center;
  }
`;
export const HeroButton = styled.button`
  background: ${(props) => props.color};
  color: var(--first_color);
  padding: 0.8rem 1rem;

  border: 2px solid ${(props) => props.color};
  font-size: var(--font-medium);
  cursor: pointer;
  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;

  border-radius: var(--x4l-border-radius);
  &:hover {
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    background: var(--accent_color);
    background: linear-gradient(145deg, var(--accent_color), var(--logo-color));
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
`;
export const HeroButtons = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
export const ImgContainer = styled.div`
  margin-bottom: -0.2rem;
  position: relative;
`;
export const HeroTitle = styled.p`
  font-size: 45px;
  letter-spacing: -1px;
  line-height: 1.2;
  font-weight: 900;
  font-family: f_bold;
  color: var(--first_color);
  span {
    color: var(--logo-color);
  }
  @media (max-width: 768px) {
    text-align: center;
    font-size: 35px;
  }
  @media (max-width: 568px) {
    text-align: center;
  }
`;
export const Tagline = styled.p`
  font-size: 18px;
  line-height: 1.5;
  width: 70%;
  letter-spacing: 1.1px;
  color: var(--first_color);
  font-family: f_light;
  @media (max-width: 768px) {
    text-align: center;

    font-size: 14px;
  }
  @media (max-width: 568px) {
    text-align: center;
    width: 100%;
  }
`;
export const ImgContainerImg = styled.img`
  width: 400px;

  @media (max-width: 1024px) {
    width: 300px;
  }
  @media (max-width: 768px) {
    width: 200px;
  }
`;
