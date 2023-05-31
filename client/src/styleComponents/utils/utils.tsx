import styled from "styled-components";
export const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 50px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Paragraph = styled.p`
  font-size: 20px;
  @media (max-width: 768px) {
  }
`;
export const Button = styled.button`
  background-color: aliceblue;

  font-size: 20px;
  @media (max-width: 768px) {
  }
`;
