import styled from "styled-components";
export const NavContainer = styled.div`
  height: 100%;
  display: flex;
  padding: 20px 50px;
  align-items: center;
  justify-content: space-between;
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

  button {
    background-color: #ff0000 !important;
  }
  @media (max-width: 768px) {
  }
`;
export const NavLink = styled.span`
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${({ activeLink }) =>
    activeLink ? " #e6007e" : "var(--text-gray-color)"};
  /* color: ({ active }) => active ? #e6007e : var(--text-gray-color); */
  font-family: f_regular;
  cursor: pointer;
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
    color: red;
    background-color: white;
    bottom: 5%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
