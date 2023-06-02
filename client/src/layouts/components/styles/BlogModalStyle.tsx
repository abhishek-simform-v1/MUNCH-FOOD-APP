import styled from "styled-components";

export const BlogContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  transition: all 0.4s;

  @media (max-width: 768px) {
    align-items: center;
    flex-wrap: wrap;
  }
  gap: var(--paragraph_1440);
  @media (max-width: 1440px) {
    gap: var(--paragraph_1440);
  }
  @media (max-width: 1024px) {
    gap: var(--paragraph_1024);
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--title_768);
  }
  @media (max-width: 576px) {
    gap: var(--title_576);
  }
  @media (max-width: 400px) {
    gap: var(--title_400);
  }
  @media (max-width: 360px) {
    gap: var(--title_360);
  }
`;
export const BlogModalContainer = styled.div`
  width: 100%;
  cursor: pointer;
  position: relative;
  transition: all 0.4s;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    align-items: center;
  }
`;
export const BlogCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* object-position: cover; */
  & img {
    object-fit: cover;
    width: 100%;
    height: 300px;
    border-radius: var(--xxxl-border-radius);
  }
  & p {
    width: 100%;
  }
  & p span {
    font-weight: bold;
  }
  @media (max-width: 768px) {
    align-items: center;
    & p {
      text-align: center;
      width: 100%;
    }
    & p span {
      text-align: center;

      font-weight: bold;
    }
  }
`;
