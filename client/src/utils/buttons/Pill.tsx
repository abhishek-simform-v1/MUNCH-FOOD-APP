import React, { ReactNode } from "react";

import styled from "styled-components";
type pillText = {
  children: ReactNode;
};
const Pill = ({ children }: pillText) => {
  const PillContainer = styled.div`
    background-color: var(--secondary_color);
    color: var(--accent_color);
    display: inline;
    border-radius: var(--xxl_border_radius);
    align-items: center;
    gap: 0.5em;
    flex-direction: column;
    height: 50px;
    display: flex;
    font-size: 10px;
    justify-content: space-around;
    padding: 0.4rem;
    width: 40px;
    cursor: pointer;
    /* padding: 8px 16px; */
    font-weight: 700;
  `;

  return <PillContainer>{children}</PillContainer>;
};

export default Pill;
