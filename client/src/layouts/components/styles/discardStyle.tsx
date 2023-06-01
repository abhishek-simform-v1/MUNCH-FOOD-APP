import styled from "styled-components";

export const DishCardsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  @media (max-width: 768px) {
    align-items: center;
    flex-wrap: wrap;
  }
`;
export const PopularContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    align-items: center;
  }
`;
