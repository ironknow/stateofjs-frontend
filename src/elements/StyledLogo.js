import styled, { css } from "styled-components"

export const StyledLogo = styled.div`
  margin-top: 60px;
  width: 500px;
  height: 290px;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 568px) {
    width: 100%;
    justify-content: center;
  }
`
export const StyledLogoElement = styled.div`
  position: relative;
  width: 98px;
  height: 98px;
  background-color: var(--dark);
  border: 1px solid #4c4f4f;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  font-weight: bold;
  font-size: 36px;
  box-sizing:border-box;

  @media (max-width: 568px) {
    width: 70px;
    height: 70px;
    font-size: 26px;
    
  }

  ${({ color }) =>
    !color &&
    css`
      background-color: transparent;
      border: none;
    `}
  ${({ color }) =>
    color === "green" &&
    css`
      color: var(--green-fluo);
    `}
  ${({ color }) =>
    color === "red" &&
    css`
      color: var(--red);
    `}

  .stars {
    position:absolute;
    top:0.5rem;
    left:0.5rem;
    font-size:16px;
    font-weight:300;
    color:var(--grey-light)
  }

`
