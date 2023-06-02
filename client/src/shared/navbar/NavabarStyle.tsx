import styled from "styled-components";
export const NavContainer = styled.div`
  display: flex;
  z-index: 99999999999;
  width: 100%;
  max-width: 1400px;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  background-color: var(--first_color);
  padding: 2rem;
  border-radius: 2rem;

  @media (max-width: 568px) {
    /* flex-direction: column; */
  }
`;
export const NavLinkContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: space-between;
  justify-content: center;

  @media (max-width: 768px) {
  }
`;
export const NavbarButton = styled.button`
  align-items: center;
  gap: 2rem;
  justify-content: space-between;
  justify-content: center;
  color: var(--first_color);
  text-transform: uppercase;
  padding: 0.8rem 1rem;

  font-size: 18px;

  border-radius: var(--lg-border-radius);
  background-color: var(--logo-color);
  @media (max-width: 768px) {
  }
`;

export const NavLogo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  font-family: logo;
  justify-content: center;
  flex-direction: column;
  position: relative;
  .logo {
    width: 60px !important;
  }
  p {
    position: absolute;
    font-size: 20px;
    color: var(--logo-color);
    background-color: white;
    bottom: -100%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
