import styled from "styled-components"

const StyledMenu = styled.aside`
  width: 270px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--grey-light);
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  overflow-y: hidden;

  @media (max-width: 968px) {
    padding-top: 1rem;
    width: 100%;
    height: 240px;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .container {
    margin-left: 2rem;
    @media (max-width: 968px) {
      display: flex;
      width: 90%;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 50px;
      margin-left: 0;
    }
  }

  .title {
    line-height: 27px;
    font-weight: 800;
    color: var(--green-turc);
    margin: 10px 0;
    @media (max-width: 968px) {
      width: 100%;
    }
  }

  .list {
    font-size: 14px;
    line-height: 24px;
    color: white;
    text-transform: Capitalize;
    margin: 10px 15px;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .selected {
    color: var(--green-fluo);
  }
`

export default StyledMenu
