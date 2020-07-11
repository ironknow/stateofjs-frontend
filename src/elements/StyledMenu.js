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
    display: none;
  }

  .container {
    margin-left: 2rem;
  }

  .title {
    line-height: 27px;
    font-weight: 800;
    color: var(--green-turc);
    margin: 10px 0;
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
`

export default StyledMenu
