import styled from "styled-components"

const StyledLanding = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--background-color-landing);
  display: flex;
  flex-direction: column;

  .periodic-elements {
    min-height: 400px;
    width: 100%;

    @media (max-width: 968px) {
      display: none;
    }
    @media (min-width: 1475px) {
      display: none;
    }
  }
`
export default StyledLanding
