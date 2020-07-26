import styled, { css } from "styled-components"

const StyledPeriodicElements = styled.div`
  width: 69.5px;
  height: 70px;
  border: 1.2px solid white;
  opacity: 0.6;
  transform: scale(1.03);
  transition: all 1s linear;

  &:hover {
    background: rgba(255,255,255,0.2);
    cursor:pointer;
  }
${({ component }) =>
  component === "header" &&
  css`
    width: 66.5px;
    height: 67px;
    opacity: 1;
    border: 1px solid #5d6069;
    border-right: none;
    border-top: none;

    @media (max-width: 968px) {
      border: 1px solid #5d6069;
    }
  `}
  ${({ component }) =>
    component === "contact" &&
    css`
      width: 66.5px;
      height: 67px;
      opacity: 1;
      border: 1px solid #5d6069;
      border-right: none;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 968px) {
        border: 1px solid #5d6069;
      }
    `}


  ${({ index, component }) =>
    component !== "header" &&
    index <= 6 &&
    css`
      color: var(--yellow);
    `}
  ${({ index }) =>
    index > 6 &&
    index < 15 &&
    css`
      color: var(--green-fluo);
    `}
  ${({ index }) =>
    index >= 15 &&
    index < 20 &&
    css`
      color: var(--green-standard);
    `}   
  ${({ index }) =>
    index >= 20 &&
    index < 23 &&
    css`
      color: var(--mauve);
      opacity: 0.4;
    `}
   ${({ index }) =>
     index >= 23 &&
     index < 35 &&
     css`
       color: var(--pink);
       opacity: 0.4;
     `}
    ${({ index }) =>
      index >= 35 &&
      index < 46 &&
      css`
        color: var(--green-standard);
        opacity: 0.4;
      `}
    ${({ index }) =>
      index >= 46 &&
      index < 53 &&
      css`
        color: var(--blue);
        opacity: 0.4;
      `}
    ${({ index }) =>
      index >= 53 &&
      index < 67 &&
      css`
        color: var(--red);
        opacity: 0.4;
      `}
    ${({ index }) =>
      index >= 67 &&
      index < 74 &&
      css`
        color: var(--orange);
        opacity: 0.3;
      `}
    ${({ index }) =>
      index >= 74 &&
      index < 79 &&
      css`
        color: var(--green-standard);
        opacity: 0.3;
      `}
    ${({ index }) =>
      index >= 79 &&
      index < 85 &&
      css`
        color: var(--yellow);
        opacity: 0.3;
      `}
    ${({ index }) =>
      index >= 85 &&
      index < 93 &&
      css`
        color: var(--green-fluo);
        opacity: 0.3;
      `}
    ${({ index }) =>
      index >= 93 &&
      index < 99 &&
      css`
        color: var(--green-standard);
        opacity: 0.3;
      `}
    ${({ index }) =>
      index >= 98 &&
      index < 102 &&
      css`
        color: var(--purple);
        opacity: 0.3;
      `}
    ${({ index }) =>
      index >= 102 &&
      index < 113 &&
      css`
        color: var(--pink);
        opacity: 0.2;
      `}
    ${({ index }) =>
      index >= 113 &&
      index < 122 &&
      css`
        color: var(--green-fluo);
        opacity: 0.2;
      `}
    ${({ index }) =>
      index >= 122 &&
      index < 134 &&
      css`
        color: var(--red);
        opacity: 0.2;
      `}
    ${({ index }) =>
      index >= 134 &&
      index < 140 &&
      css`
        color: var(--orange);
        opacity: 0.1;
      `}
    ${({ index }) =>
      index >= 140 &&
      index < 163 &&
      css`
        color: var(--green-standard);
        opacity: 0.05;
      `}
    ${({ index }) =>
      index >= 163 &&
      index < 180 &&
      css`
        color: var(--orange);
        opacity: 0.05;
      `}


  .stars {
    padding-top: 5px;
    padding-left: 5px;
    font-size: 12px;
    color:var(--white);
  }

  .symbol {
    font-size: 16px;
    line-height: 24px;
    font-weight: bold;
    text-align: center;
    margin-top: 7px;

    ${({ component, index }) =>
      component === "header" &&
      index <= 1 &&
      css`
        font-size: 26px;
        color: white;
      `} 
      ${({ component, index }) =>
        component === "header" &&
        index > 1 &&
        index <= 3 &&
        css`
          font-size: 26px;
          color: #fd696a;
        `} 
  }
  .name {
    font-size: 10px;
    text-align: center;
    overflow: hidden;

    }
`
export default StyledPeriodicElements
