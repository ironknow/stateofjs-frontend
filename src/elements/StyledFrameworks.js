import styled from "styled-components"

const StyledFrameworks = styled.div`
  flex: 1;

  .container {
    margin-left: 270px;
    flex: 1;
    display: flex;
    flex-direction: column;

    @media (max-width: 968px) {
      margin-left: 0;
    }

    .header-graphs {
      margin-top: 4rem;
      margin-bottom: 1rem;
    }
    .main {
      padding: 3rem 4rem 0 4rem;
      min-height: 800px;
      @media (max-width: 968px) {
        padding: 0;
      }
    }

    .title-graphs {
      margin-top: 5px;
      font-size: 1rem;
      line-height: 1.8rem;

      @media (max-width: 968px) {
        display: none;
      }
    }
  }
`

export default StyledFrameworks
