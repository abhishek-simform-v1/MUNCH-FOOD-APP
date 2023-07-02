import styled from 'styled-components';
export const NavContainer = styled.div`
  display: flex;
  z-index: 100;
  width: 90%;
  max-width: 1400px;
  height: var(--step-2);
  -webkit-box-align: center;
  align-items: center;
  margin: 0 auto;
  -webkit-box-pack: justify;
  justify-content: space-between;
  backdrop-filter: blur(50px);
  position: fixed;
  background-color: var(--secondary_transparent);
  padding: 2rem;
  border-radius: var(--lg_border_radius);
  top: -1.5%;
  left: 50%;
  transform: translate(-50%, 50%);
  @media (max-width: 676px) {
    /* display: none; */
  }
`;
export const NavLinkContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 676px) {
    flex-direction: column;
  }
`;
export const NavMobileContainer = styled.div`
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100dvh;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--secondary_color);
  font-size: var(--step-1);
  /* transform: translateX(110%); */
  letter-spacing: 2px;
  justify-content: center;
  @media (min-width: 676px) {
    display: none;
  }
`;

export const NavLogo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  font-family: logo;
  justify-content: center;
  position: relative;
  z-index: 1;
  gap: 1rem;
  .logo {
    width: 40px !important;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
