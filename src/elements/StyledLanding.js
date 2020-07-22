import styled from "styled-components"

const StyledLanding = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--background-color);
  display: flex;
  flex-direction: column;

  .periodic-elements {
    height: 400px;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 968px) {
      display: none;
    }
  }
`
export default StyledLanding
