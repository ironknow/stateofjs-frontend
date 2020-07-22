import styled from "styled-components"

const StyledHeader = styled.header`
  height: 67px;
  border-bottom: 1px solid #5d6069;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  .section {
    padding-left: 2rem;
    color: var(--green-fluo);
    font-weight: 600;
    @media (max-width: 768px) {
      display: none;
    }
  }
  .langs {
    width: 120px;
    height: 100%;
    border-right: 1px solid var(--grey-light);
    border-left: 1px solid var(--grey-light);
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 768px) {
      display: none;
    }

    .lang {
      font-weight: 800;
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      &:nth-child(1) {
        border-right: 1px solid var(--grey-light);
      }
      &:hover {
        cursor: pointer;
        color: var(--green-fluo);
      }
    }
    .selected {
      color: var(--green-fluo);
    }
  }
  .title {
    width: 80px;
    padding-right: 2rem;
    color: var(--green-fluo);
    font-weight: 600;
    align-items: flex-end;
    text-transform: capitalize;
    @media (max-width: 768px) {
      display: none;
    }
  }

  .home {
    display: start-left;
    color: var(--green-fluo);

    @media (min-width: 769px) {
      display: none;
    }
  }
  .menu {
    color: var(--green-fluo);

    @media (min-width: 769px) {
      display: none;
    }
  }
`

export default StyledHeader
