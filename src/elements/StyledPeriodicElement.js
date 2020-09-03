import styled, { css } from "styled-components"

const StyledPeriodicElement = styled.div`
  width: 69.5px;
  height: 70px;
  border: 2px solid white;
  opacity: 0.6;
  transform: scale(1.03);
  transition: all 1s linear;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    cursor: pointer;
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


  ${({ index, component, line }) =>
    (component !== "header" || line === 0) &&
    index <= 6 &&
    css`
      color: var(--yellow);
      opacity: 0.4;
    `}

  ${({ index, line }) =>
    line === 0 &&
    index > 6 &&
    index < 16 &&
    css`
      color: var(--green-fluo);
      opacity: 0.4;
    `}
  ${({ index, line }) =>
    line === 0 &&
    index >= 16 &&
    index < 20 &&
    css`
      color: var(--green-standard);
      opacity: 0.4;
    `}  
  ${({ index, line }) =>
    line === 1 &&
    index === 0 &&
    css`
      color: var(--green-standard);
      opacity: 0.3;
    `}  
    
  ${({ index, line }) =>
    line === 1 &&
    index >= 1 &&
    index < 17 &&
    css`
      color: var(--mauve);
      opacity: 0.3;
    `}

  ${({ index, line }) =>
    line === 1 &&
    index >= 17 &&
    index <= 20 &&
    css`
      color: var(--green-standard);
      opacity: 0.3;
    `}

  ${({ index, line }) =>
    line === 2 &&
    index >= 0 &&
    index <= 14 &&
    css`
      color: var(--green-standard);
      opacity: 0.2;
    `}

  ${({ index, line }) =>
    line === 2 &&
    index > 14 &&
    index < 20 &&
    css`
      color: var(--pink);
      opacity: 0.2;
    `}
  ${({ index, line }) =>
    line === 3 &&
    index >= 0 &&
    index <= 11 &&
    css`
      color: var(--pink);
      opacity: 0.2;
    `}
  ${({ index, line }) =>
    line === 3 &&
    index >= 11 &&
    index <= 16 &&
    css`
      color: var(--orange);
      opacity: 0.2;
    `}

  ${({ index, line }) =>
    line === 3 &&
    index >= 16 &&
    index <= 20 &&
    css`
      color: var(--green-fluo);
      opacity: 0.2;
    `}


  ${({ index, line }) =>
    line === 4 &&
    index >= 0 &&
    index <= 4 &&
    css`
      color: var(--yellow);
      opacity: 0.1;
    `}
  ${({ index, line }) =>
    line === 4 &&
    index >= 5 &&
    index <= 12 &&
    css`
      color: var(--green-fluo);
      opacity: 0.1;
    `}
  ${({ index, line }) =>
    line === 4 &&
    index >= 13 &&
    index <= 17 &&
    css`
      color: var(--green-standard);
      opacity: 0.1;
    `}
  ${({ index, line }) =>
    line === 4 &&
    index >= 18 &&
    index <= 20 &&
    css`
      color: var(--purple);
      opacity: 0.1;
    `}
  ${({ index, line }) =>
    line === 5 &&
    index >= 0 &&
    index <= 1 &&
    css`
      color: var(--purple);
      opacity: 0.1;
    `}
  ${({ index, line }) =>
    line === 5 &&
    index >= 2 &&
    index <= 12 &&
    css`
      color: var(--pink);
      opacity: 0.1;
    `}
  ${({ index, line }) =>
    line === 5 &&
    index >= 13 &&
    index <= 20 &&
    css`
      color: var(--green-standard);
      opacity: 0.1;
    `}

  ${({ index, line }) =>
    line === 6 &&
    index >= 0 &&
    index <= 3 &&
    css`
      color: var(--green-standard);
      opacity: 0.08;
    `}
  ${({ index, line }) =>
    line === 6 &&
    index >= 4 &&
    index <= 13 &&
    css`
      color: var(--blue);
      opacity: 0.08;
    `}

  ${({ index, line }) =>
    line === 6 &&
    index >= 14 &&
    index <= 20 &&
    css`
      color: var(--orange);
      opacity: 0.08;
    `}
  ${({ index, line }) =>
    line === 7 &&
    index >= 0 &&
    index <= 13 &&
    css`
      color: var(--orange);
      opacity: 0.04;
    `}
  ${({ index, line }) =>
    line === 7 &&
    index >= 14 &&
    index <= 15 &&
    css`
      color: var(--green-fluo);
      opacity: 0.04;
    `}
  ${({ index, line }) =>
    line === 7 &&
    index >= 16 &&
    index <= 20 &&
    css`
      color: var(--yellow);
      opacity: 0.04;
    `}

  ${({ index, line }) =>
    line === 8 &&
    index >= 0 &&
    index <= 2 &&
    css`
      color: var(--orange);
      opacity: 0.03;
    `}

  ${({ index, line }) =>
    line === 8 &&
    index >= 3 &&
    index <= 13 &&
    css`
      color: var(--green-fluo);
      opacity: 0.03;
    `}
  ${({ index, line }) =>
    line === 8 &&
    index >= 14 &&
    index <= 20 &&
    css`
      color: var(--purple);
      opacity: 0.03;
    `}

  .stars {
    padding-top: 5px;
    padding-left: 5px;
    font-size: 12px;
    color: var(--white);
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
    font-size: 0.6vw;
    text-align: center;
    overflow: hidden;
  }
`
export default StyledPeriodicElement
