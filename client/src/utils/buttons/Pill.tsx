import React, { ReactNode } from 'react';

import styled from 'styled-components';
type pillText = {
  children: ReactNode;
};
const Pill = ({ children }: pillText) => {
  const PillContainer = styled.div`
    background-color: var(--secondary_color);
    color: var(--accent_color);
    display: inline;
    border-radius: var(--xxl_border_radius);
    padding: 7px 10px;
    font-size: 10px;
    align-items: center;
    gap: 1em;
    display: flex;
    cursor: pointer;
    font-weight: 700;
  `;

  return <PillContainer>{children}</PillContainer>;
};

export default Pill;
