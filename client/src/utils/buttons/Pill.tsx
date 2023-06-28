import React, { ReactNode } from 'react';

import styled from 'styled-components';
type pillText = {
  children: ReactNode;
};
const Pill = ({ children }: pillText) => {
  const PillContainer = styled.div`
    color: var(--accent_color);
    border-radius: var(--xxl_border_radius);
    gap: 0.5em;
    font-size: var(--step-0);
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: 2px;
    border: 2px solid var(--accent_lite);
    background-color: var(--secondary_transparent);
    padding: 0.4em 0.8em;
  `;

  return <PillContainer>{children}</PillContainer>;
};

export default Pill;
