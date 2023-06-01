import styled from "styled-components";

export const BlogContainer = styled.div`
  height: 25rem;
  display: flex;
  margin: 2rem 0rem;
  gap: 50px;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: var(--xl-border-radius);
  overflow: hidden;
  cursor: pointer;
  position: relative;
  color: #f0f0f0;
  transition: all 0.4s;
  @media (max-width: 768px) {
    align-items: center;
  }
`;
export const BlogModalContainer = styled.div`
  width: 100%;
  height: 30rem;
  border-radius: var(--xl-border-radius);
  overflow: hidden;
  cursor: pointer;
  position: relative;
  color: #f0f0f0;
  transition: all 0.4s;
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
