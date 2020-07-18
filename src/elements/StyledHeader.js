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
  }
  .langs {
    width: 120px;
    height: 100%;
    border-right: 1px solid var(--grey-light);
    border-left: 1px solid var(--grey-light);
    display: flex;
    justify-content: space-around;
    align-items: center;
    .lang {
      font-weight: 800;
      &:nth-child(1) {
        padding-left: 1rem;
      }
      &:nth-child(3) {
        padding-right: 1rem;
      }
      &:hover {
        cursor: pointer;
        color: var(--green-fluo);
      }
    }
  }
  .title {
    width: 80px;
    padding-right: 2rem;
    color: var(--green-fluo);
    font-weight: 600;
    align-items: flex-end;
    text-transform: capitalize;
  }
`

export default StyledHeader
