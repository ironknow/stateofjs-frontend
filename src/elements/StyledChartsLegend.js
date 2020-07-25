import styled, { css } from "styled-components"

export const StyledChartsLegend = styled.div`
  margin-bottom: 4rem;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--white);
  position: relative;
  bottom: 4rem;

  .legend {
    width: 200px;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .text {
    font-size: 14px;
    width: 80%;
  }
`
export const StyledShape = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 0.5rem;
  ${({ color }) =>
    css`
      background-color: ${color};
    `}
`
