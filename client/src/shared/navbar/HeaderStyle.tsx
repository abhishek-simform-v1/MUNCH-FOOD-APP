import styled from "styled-components";
export const NavContainer = styled.div`
  display: flex;
  z-index: 100;
  width: 100%;
  max-width: 1400px;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(50px);
  position: fixed;
  background-color: var(--secondary_transparent);
  padding: 2rem;
  border-radius: 2rem;
  top: 1%;
  @media (max-width: 568px) {
    /* flex-direction: column; */
  }
`;
export const NavLinkContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: center;

  @media (max-width: 768px) {
  }
`;
export const NavigationToggle = styled.div`
  @media (max-width: 768px) {
  }
`;

export const NavLogo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  font-family: logo;
  justify-content: center;
  position: relative;
  gap: 1rem;
  .logo {
    width: 40px !important;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
