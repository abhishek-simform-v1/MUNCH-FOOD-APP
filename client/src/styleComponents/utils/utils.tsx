import styled from "styled-components";
export const MainContainer = styled.div`
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 30px 50px;
  @media (max-width: 768px) {
    padding: 20px 50px;

    flex-direction: column;
  }
  @media (max-width: 568px) {
    padding: 20px 0px;
  }
`;

export const Paragraph = styled.p`
  color: var(--first_color);
  font-size: 20px;
  @media (max-width: 768px) {
  }
`;
export const Subtitle = styled.p`
  font-size: 24px;
  color: var(--first_color);
  font-family: f_light;
  @media (max-width: 768px) {
  }
`;
export const Title = styled.h1`
  font-size: 45px;
  text-align: center;
  font-family: f_bold;
  font-weight: 900;
  opacity: 0.7;

  /* text-transform: uppercase; */
  letter-spacing: 2px;
  color: var(--logo-color);

  @media (max-width: 768px) {
    font-size: 25px;
  }
  @media (max-width: 568px) {
    font-size: 16px;
  }
`;

export const Button = styled.button`
  background-color: aliceblue;
  font-weight: 500;
  font-size: 20px;
  @media (max-width: 768px) {
  }
`;
