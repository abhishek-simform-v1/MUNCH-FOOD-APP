import React from "react";

import styled from "styled-components";
type pilleText = {
  pilleText: string;
};
const Pill = ({ pilleText }: pilleText) => {
  const PillContainer = styled.div`
    background-color: var(--green-light-color);
    color: var(--green-dark-color);
    display: inline;
    border-radius: var(--x4l-border-radius);
    padding: 0.8rem 1rem;
    font-size: 12px;
    font-weight: 700;
  `;

  return <PillContainer>{pilleText}</PillContainer>;
};

export default Pill;
