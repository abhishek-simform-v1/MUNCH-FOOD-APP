import styled from "styled-components";

export const FoodRecipesCatogaryContainer = styled.div`
  font-size: 45px;
  letter-spacing: -1px;
  line-height: 1.2;
  flex-direction: column;
  align-items: center;
  font-weight: 900;
  display: flex;
  font-family: f_bold;
  color: var(--accent_color);
  gap: 2rem;
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
export const FoodRecipesCatogaryTextContent = styled.div`
  font-size: 45px;
  letter-spacing: -1px;
  line-height: 1.2;
  font-weight: 900;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-family: f_bold;
  color: var(--accent_color);
  span {
    color: var(--logo-color);
  }
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 35px;
  }
  @media (max-width: 568px) {
    text-align: center;
  }
`;
export const FoodRecipesCatogaryImgContent = styled.div`
  font-size: 45px;
  letter-spacing: -1px;
  line-height: 1.2;
  display: flex;
  gap: 2rem;
  object-fit: contain;

  height: 30rem;
  font-weight: 900;
  font-family: f_bold;
  color: var(--accent_color);

  @media (max-width: 768px) {
    text-align: center;
    font-size: 35px;
  }
  @media (max-width: 568px) {
    text-align: center;
  }
`;
