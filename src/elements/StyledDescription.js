import styled from "styled-components"

const StyledDescription = styled.div`
  width: 100%;
  display: flex;

  .element {
    border: 1px solid #5d6069;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 120px;

    .symbol {
      font-size: 36px;
      font-weight: 800;
      color: var(--green-fluo);
    }
    .name {
      margin-top: 0.5rem;
      font-size: 20px;
      color: #868a8c;
    }
  }
  .description {
    padding-left: 1rem;

    .description-title {
      font-size: 32px;
      line-height: 54px;
      font-weight: 800;
    }
    .description-text {
      width: 100%;
      line-height: 20px;
    }

    .links {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
      width: 150px;
    }
    .link {
      border: 1px solid var(--white);
      color: var(--white);
      padding: 0.5rem 0.5rem;
      font-size: 12px;
      font-weight: 700;
      text-transform: capitalize;

      &:hover {
        cursor: pointer;
        color: var(--red);
        border: 1px solid var(--red);
        text-decoration: none;
      }
    }
  }
`
export default StyledDescription
